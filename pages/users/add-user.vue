
<template lang="pug">
    .container
        div.content-header
            div.header
                h1.content_title Users
                div.tabs
                    UBreadcrumb( class="custom-breadcrumb" :links="[{ label: 'Users', to: '/users' }, { label: 'Add User' ,to: '/users/profile '} ] " :style="{ color: 'red' }" )
                div.rest.mt-7
                    div.info
                        p.p1 Add user account
                        p Add photo and personal details here
                    div.button    
                        UButton( label="Reset " @click="handleReset"  color="#344054" variant="solid" size="lg" class="custom-button" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
                        UButton(  label="Add" @click="handleAdd" class="custom-button" size="lg" :style="{ background: 'linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%)',color: '#FFFFFF'  }" variant="solid")
                div.line.mt-4  
            div.content
                UsersAddUser
            div.rest.mt-7
                    div
                    div.button    
                        UButton( label="Reset "  @click="handleReset"   color="#344054" variant="solid" size="lg"  class="custom-button" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
                        UButton( label="Add" @click="handleAdd"  class="custom-button" size="lg" :style="{ background: 'linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%)',color: '#FFFFFF'  }" variant="solid" )

</template>

<script setup>

import { useUserStore } from  '../store/user';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';


const userStore=useUserStore();
const toast = useToast();

const handleReset = ()=>{
    console.log('reset button clicked')
    userStore.resetForm();
    toast.success('Form reset successfully');
}

const handleAdd =async () => {
    console.log('add button clicked')
    const data = {
        firstName: userStore.firstName,
        lastName: userStore.lastName,
        email: userStore.email,
        password: userStore.password,
        role: userStore.role,
        file: userStore.file,
    };
    console.log(data);

    const { data : response }= await useAsyncGql({
            operation: 'addUser',
            variables :{
                data:{
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    password: data.password,
                    role: data.role,
                    file: data.file,
                },
            },
        })

    if (response.addUser) {
            toast.success('User added successfully', response.addUser.message, {
                duration: 5000,
                position: 'top-right',
            });
            userStore.setFormData(data);
            userStore.resetForm();
        } else {
            toast.error('Failed to add user', {
                duration: 5000,
                position: 'top-right',
                
            });
        }
};


</script>


<style lang="scss" scoped>
.container{
    background-color: #FCFCFD;
    height: 100%;
    
    & .content-header{
        padding:2rem;
        width: 100%;

        & .header{

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