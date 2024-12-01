<template lang="pug">
        div.account-page-info.pt-0
            div.page-info.mb-5
                div.info.mt-5
                    p Account info {{userId}}
                    div.account-info
                        UForm.form
                            UFormGroup(label="Name" name="Name" :style="{ color: 'red' }")
                            UInput( class="inputStyles" v-model="userStore.firstName"  color="#858589")
                            
                            UFormGroup(label="Email address"  name="Email address" :style="{ color: 'red' }")
                            UInput( class="inputStyles" v-model="userStore.email"  color="#858589")
                            
                            UFormGroup(label="Role" name="email" :style="{ color: 'red' }")
                            UInput( class="inputStyles" v-model="userStore.role"  color="#858589") 
                            
                        
            div.info-edit.mt-3
                UButton(icon="ph:pencil-simple-line" label="edit" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/user';

const route=useRoute();
const userId = route.params.id;
const userStore = useUserStore();
// const tableData = ref([]); 
// const userData = ref(null);

console.log(userStore.firstName)


onMounted(async () => {
  const token = getAccessToken(); 
  if (token) {
    const { data, error } = await useAsyncGql("GetUser", { id: userId });
    if (data?.value?.user) {
    //   userData.value = data.value.user;
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
const updatedData = {
      name: userStore.firstName,
      email: userStore.email,
      role: userStore.role,
    };

    console.log(updatedData.name);




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
        width: 10%;
        height: fit-content;
    }
    & .page-info{
        padding:  0rem 1.5rem;
        width: 80%;

        &  .info{
            padding: 1.5rem;
            background-color: #FFFFFF;


            &  .account-info{
                    
                &  .form{
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                &.custom-color {
                   color: red;
                } 
                &.inputStyles{
                    border-bottom: '1px solid #DDDCD8';
                    color: red;
                }
                .dark\:text-white:is(.dark *) {
                    --tw-text-opacity: 1;
                     color: black; 
}
            }
        }

    & p{
        font-size: 20px;
        font-weight: 600px;
        color: #101828;
    }
}
}
</style>