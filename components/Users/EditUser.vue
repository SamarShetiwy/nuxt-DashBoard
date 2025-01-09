<template lang="pug">
    div.account-page-info.pt-0.flex.justify-between.p-11
        div.info.mt-11
            p Account info {{userId}}
            div.account-info.mt-5
                el-form(:model="userStore" label-position="top" label-width="120px")
                    el-form-item(label="Name" prop="name"  )
                        el-input(v-model="userStore.name" class="inputStyles" style="color: red;" ) 
                    el-form-item(label="Email address" prop="email")
                        el-input(v-model="userStore.email" class="inputStyles" )
                    el-form-item(label="Role" prop="role")
                        el-input(v-model="userStore.role" class="inputStyles" )
        el-button.mt-11(
            type="primary"
            @click="saveChanges"
            style="box-shadow: 0px 1px 2px 0px #1018280D; border: 1px solid #DDDCD8; background-color: #FFFFFF; color: #333;"
        )
            Icon( name="ph:pencil-simple-line"  style="margin-right: 8px;  width: 20px; height: 20px; ")
            | edit

</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useUserStore } from '../stores/user.ts';
import { defineEmits } from 'vue';
import { useToast} from 'vue-toast-notification';


const route=useRoute();
const userId = route.params.id;
const userStore = useUserStore();
const emit = defineEmits();
const toast = useToast();



console.log(userStore.name)


const fetchUserData =(async () => {
    const token = getAccessToken(); 
    if (token) {
    const { data, error } = await useAsyncGql("GetUser", { id : userId });
    if (data?.value?.user) {
    console.log(data.value.user);
    userStore.setFormData(data.value.user);
    } else if (error?.value) {
    console.error("Error loading user:", error.value);
    } else {
    console.warn("No user data found!");
    }
    } else {
    console.error("No token found!");
    }
});

fetchUserData(); 


const saveChanges = async () => {
    const updatedData = {
    name: userStore.name,
    email: userStore.email,
    role: userStore.role,
    };

const { data, error } = await useAsyncGql("UpdateUser", {
    id: userId,
    changes: updatedData,
    });

const res = data?.value?.updateUser;
    if (res) {
        toast.success(res?.message || 'User updated successfully', {
            duration: 5000,
            position: 'top-right',
    });
    userStore.setFormData(res);
    emit('updateUser', res); 
    }else{
        toast.error(res?.message || 'User updated faield', {
            duration: 5000,
            position: 'top-right',
    });
    }
};


</script>


<style lang="scss" scoped>
.container {
    width: 100%;
    // height: 100vh;
}
.account-page-info{
    background-color:#FCFCFD;
    display: flex;
    gap: 2rem;

    &  .info-edit{
        display: flex;
        justify-content: space-between;
        // width: 10%;
        height: fit-content;
    }
    & .page-info{
        padding:  0rem 1.5rem;
        // width: 80%;

        &  .info{
            padding: 1.5rem;
            background-color: #FFFFFF;


            &  .account-info{
                    
                &  .form{
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                // &  .form-group{
                //     .inputStyles {
                //         color: rgb(23, 122, 68) !important;
                //     }
                // }
                &.custom-color {
                    color: red;
                } 
    & p{
        font-size: 20px;
        font-weight: 600px;
        color: #101828;
    }
}
}
}
}

        
</style>