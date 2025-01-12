
<template lang="pug">
    div.content-header
        div.header
            h1.content_title Users
            div.tabs
              UBreadcrumb( class="custom-breadcrumb" :links="[{ label: 'Users', to: '/users/all-users' }, { label: 'Add User' ,to: ''} ] " :style="{ color: 'red' }" )
            div.rest.mt-7
                div.info
                    p.p1 Add user account
                    p(class=" text-xs sm:text-xl") Add photo and personal details here
                div.button    
                    UButton( label="Reset " @click="handleReset"  color="#344054" variant="solid" size="lg" class="custom-button  px-2 py-2 sm:px-5 sm:py-3" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
                    UButton(  label="Add" @click="handleAdd" class="custom-button px-3 py-2 sm:px-6 sm:py-3" size="lg" :style="{ background: 'linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%)',color: '#FFFFFF'  }" variant="solid")
        div.line.my-5  
        div.content-form
            UsersAddUser(:newUserStore="newUserStore")
        div.line.mt-11      
        div.rest(class="sm:mt-[3rem] mt-7") 
            div
            div.button    
                UButton( label="Reset "  @click="handleReset"   color="#344054" variant="solid" size="lg"  class="custom-button px-2 py-2 sm:px-5 sm:py-3" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
                UButton( label="Add" @click="handleAdd"  class="custom-button px-3 py-2 sm:px-6 sm:py-3" size="lg" :style="{ background: 'linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%)',color: '#FFFFFF'  }" variant="solid" )

</template>

<script setup>

import { useUserStore } from  '../stores/user';
import { addUserStore } from  '../stores/addUser';
import { useAllUserStore } from '../stores/allUsers.ts';
import { useToast} from 'vue-toast-notification';
// import 'vue-toast-notification/dist/theme-sugar.css';


const userStore=useUserStore();
const newUserStore =addUserStore();
const toast = useToast();
const store = useAllUserStore();



const handleAdd = async () => {
  try {
    
    const newUser = {
        name: newUserStore.name || ' moro',
        email: newUserStore.email || 'samar@example.com',
        password: newUserStore.password || '12356',
        role: newUserStore.role || 'customer',
        avatar: newUserStore.avatar || 'https://moro.com/default-avatar.jpg'
      };
      
    console.log(newUser);
    const addUser = await newUserStore.addUser(newUser);

    if (addUser) {
      toast.success('User added successfully', {
        duration: 5000,
        position: 'top-right',
      });
      store.users.unshift(addUser);
    } else {
      toast.error('User addition failed', {
        duration: 5000,
        position: 'top-right',
      });
    }
  } catch (error) {
    console.error('Failed to add user:', error);
    toast.error('Error adding user', {
      duration: 5000,
      position: 'top-right',
    });
  }
};


const handleReset = ()=>{
    userStore.resetForm();
    toast.success('Form reset successfully');
}


</script>


<style lang="scss" scoped>
.container{
    background-color: #FCFCFD;
    height: 100%;
    width: 100%;
    
    & .content-header{
        padding:2rem;
        // width: 100%;
        height: 100vh;

        & .content-form{
          height: 250px;
          overflow-y:scroll;

        }


        & .header{
            // position: fixed;

            & .tabs{
                display: flex;
                gap:0.5rem;

                & .custom-breadcrumb {
                        color: #858589; 
            }
        }
            & .rest{
                display: flex;
                justify-content: space-between;

                & .p1{
                    color: #101828;
                    font-size:16px;
                    font-weight: 600;
                }

                & .button{
                    display: flex;
                    gap: 0.5rem;
                }

            }
        }
        
        & .rest{
            display: flex;
            justify-content: space-between;

            & .button{
                display: flex;
                gap: 0.5rem;
            }
        }
    }
}


</style>