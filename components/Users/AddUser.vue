<template lang="pug"> 
    div.account-page-info.mt-5
        div.page-info
            h2 Account info
        div.info-profile.mt-11
            div.account
                div.name
                    URadio(:style={color: '#FFFFFF'})
                    p Name
                div.input
                    div
                        UInput( class="input-size1" 
                        v-model="userStore.firstName" 
                        v-bind="firstNameAttrs" 
                        :style="{color:'#000000', size:'16px' ,boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
                        span.error-message(v-if="errors.lastName") {{ errors.lastName }}
                    div
                        UInput( class="input-size1" 
                        v-model="userStore.lastName"
                        v-bind="lastNameAttrs" 
                        :style="{ color:'#000000' ,boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
                        span.error-message(v-if="errors.lastName") {{ errors.lastName }} 
                div
            div.account
                div.name
                    p Email address
                div.input.d-flex.flex-column
                    UInput( class="input-size2" 
                    v-model="userStore.email"  
                    v-bind="emailAttrs"
                    :style="{ color:'#000000', boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }") 
                    span.error-message(v-if="errors.email") {{ errors.email }}

                div
            div.account
                div.name
                    p Password 
                div.input
                    UInput( class="input-size2"
                    v-model="userStore.password"  
                    v-bind="PasswordAttrs" 
                    :style="{ color:'#000000', boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF'}") 
                    span.error-message(v-if="errors.password") {{ errors.password }}
                div
            div.account
                div.name
                    p Role
                div.input
                    UInput( class="input-size2" 
                    v-model="userStore.role"  
                    v-bind="roleAttrs"  
                    :style="{ color:'#000000', boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }") 
                    span.error-message(v-if="errors.role") {{ errors.role }}
                div
            div.account
                div.name
                    p Photo
                div.input
                    UAvatar( src="https://avatars.githubusercontent.com/u/7547335?v=4" size="2xl")
                    div.file
                        UInput( type="file"  v-model="userStore.file" v-bind="fileAttrs" placeholder="click or drag and drop" size="2xs" icon="icon-park:upload-two" class="input-size3" :style="{ }") 
                        span.error-message(v-if="errors.file") {{ errors.file }}
                div
        
        
</template>

<script setup>

import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { useUserStore } from  '../stores/user';



const { errors, handleSubmit, defineField, resetField } = useForm({
    validationSchema: yup.object({
        firstName: yup
        .string()
        .matches(/^[a-zA-Z\s]*$/, 'First name must contain only letters and spaces')
        .required('First name is required'),
        
        lastName: yup
        .string()
        .matches(/^[a-zA-Z\s]*$/, 'Last name must contain only letters and spaces')
        .required('Last name is required'),
        
        email: yup
        .string()
        .email('Please enter a valid email address')
        .required('Email is required'),
        
        password: yup
        .string()
        .min(6, 'Password must be at least 6 characters long')
        .required('Password is required'),

        role: yup
        .string()
        .required('Role is required'),

        file: yup
        .mixed()
        .required('File is required'),

    }),
});

const userStore=useUserStore();

const [firstName, firstNameAttrs] = defineField('firstName', {
    initialValue: userStore.firstName, 
});

const [lastName, lastNameAttrs] = defineField('lastName', {
    initialValue: userStore.lastName, 
});

const [email, emailAttrs] = defineField('email', {
    initialValue: userStore.email, 
});

const [Password, PasswordAttrs] = defineField('password', {
    initialValue: userStore.password, 
});

const [role, roleAttrs] = defineField('role', {
    initialValue: userStore.role, 
});

const [file, fileAttrs] = defineField('file', {
    initialValue: userStore.file,
});

</script>

<style lang="scss" scoped>
.account-page-info{
    background-color:#FCFCFD;
    gap: 2rem;
    // width: 100%;

    & .info-profile{
            display: flex;
            flex-direction: column;
            gap: 2rem;
        & .account{
            display: flex;
            justify-content: space-between;
            align-items: center;
            & p{
                color:#000000;
                font-size: 14;
                font-weight: 600;
            }   
            & .name{
                width: 15rem;
            }
            & .input{
                display: flex;
                gap: 1rem;

                & .error-message{
                    color: red;
                    font-size: 14px;
                    margin-top: 10px;
                }
                
                & .input-size1{
                    width: 244px;
                    font-size: 16px;
                    font-weight: 400;

                }
                & .input-size2{
                    width: 512px;
                    align-content: start;
                    font-size: 16px;
                    font-weight: 400;
                }

                & .file {
                        width: 428px;
                        height: 104px;
                        border-radius: 10px;
                        border: 1px solid #DDDCD8; 
                        box-shadow: 0px 1px 2px 0px #1018280D; 
                        background-color: #FFFFFF; 
                        display: flex;
                        flex-direction: column; 
                        justify-content: center;
                        align-items: center; 
                        cursor: pointer; 
                        }

                // & .input-size3{
                //     width: 428px;
                //     height: 104px;
                // }

                
            }


        }
    }

}

</style>

