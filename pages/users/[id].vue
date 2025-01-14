<template lang="pug">
    div.container
        div.content-header.p-11
            div.content
                h1.content_title Users
            div.pages
                div.tabs
                    UBreadcrumb( class="custom-breadcrumb" :links="[{ label: 'Users', to: '/users/all-users' }, { label: 'user profile' ,to: ''} ] " :style="{ color: 'red' }" )
                div.button
                    UButton(icon="hugeicons:lock"  class="custom-button" :style="{ background: 'linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%)',color: '#FFFFFF'  }" variant="solid" label="Unblock")
                    UButton(icon="icon-park-outline:delete" color="#344054" variant="solid" label="Delete " class="custom-button" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
                    UButton(icon="heroicons-outline:ellipsis-vertical" color="#344054" variant="solid" class="custom-button" )
            div.admin.mt-2
                div.avatar
                    UAvatar(
                        size="3xl"
                        src="../../assets/images/Avatar (1).png"
                        alt="Avatar")
                    div.detail.text
                        div.text
                            //- UIcon
                            p.name Olivia Rhye
                        p.role U123456781
            div.mt-1.account
                p Account
            div.line
        div
            UsersEditUser(:userData="userData" @updateUser="updateUserData")        

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../stores/user.ts';

const userStore = useUserStore();
const userData = ref({ 
  name: '', 
  email: '', 
  role: '' 
});

const updateUserData = (updatedData) => {
  userData.value = updatedData; 
  console.log('Updated user data:', updatedData);
};

</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100%;

    &  .content-header{
        background-color: #FEF7F7;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        &  .pages{
        display: flex;
        justify-content: space-between;
        
        & .tabs{
            display: flex;
            gap: 1rem;
        }

        &  .button{
            display: flex;
            gap: 1rem;
        }
    }
    &  .admin{
        
        & .avatar{
            display: flex;
            align-items: center;
            gap: 1rem;

            & .detail{
            
                & .text{

                    & p{
                        color: #B71A2A;
                        font-size: 24px;
                        font-weight: 500px;
                
            }
                }
                & .role{
                    font-size: 14px;
                    font-weight: 300px;
                    color: #B71A2A;
                    line-height: 21.6px;

                }
            }
        }
    }
    &  .account{
        border-bottom: 2px solid #B71A2A  ;
        width: 65px;
        display: flex;
        padding-bottom: 1rem;

        & p{
            color: #B71A2A;
        }
    }

    & .profile{
        background-color: #FCFCFD;
    }
}
}


</style>
