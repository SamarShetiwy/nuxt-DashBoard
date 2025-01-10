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
                        v-model="userStore.name" 
                        v-bind="nameAttrs" 
                        :style="{color:'#000000', size:'16px' ,boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
                        span.error-message(v-if="errors.name") {{ errors.name }}
                    div
                        UInput( class="input-size1" 
                        v-model="userStore.name"
                        v-bind="nameAttrs" 
                        :style="{ color:'#000000' ,boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
                        span.error-message(v-if="errors.name") {{ errors.name }} 
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
                    v-bind="passwordAttrs" 
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
                    UAvatar(v-if="avatar" :src="avatarUrl" size="2xl")
                    div(v-else)
                        UAvatar(:src="'https://avatars.githubusercontent.com/u/7547335?v=4'" size="2xl")
                    div.file
                        UInput(type="file" v-model="avatar"  v-bind="avatarAttrs"  @change="handleFileChange" placeholder="click or drag and drop" size="2xs" icon="icon-park:upload-two")
                    span.error-message(v-if="errors.avatar") {{ errors.avatar }}
                div
        
        
</template>

<script setup>

import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { useUserStore } from  '../stores/user';


const { errors, handleSubmit, defineField, resetField } = useForm({
  validationSchema: yup.object({
    name: yup
      .string()
      .matches(/^[a-zA-Z\s]*$/, 'name must contain only letters and spaces')
      .required(' name is required'),

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

    avatar: yup
    .mixed()
    .required('File is required')
    .test('fileSize', 'File is too large', value => {
      return value && value.size <= 2 * 1024 * 1024;  // التحقق من حجم الملف (2MB كحد أقصى)
    })
    .test('fileType', 'Invalid file type', value => {
      return value && ['image/jpeg', 'image/png'].includes(value.type);  // التأكد من أن الصورة تكون إما PNG أو JPEG
    }),
})
});
const userStore = useUserStore();

const [name, nameAttrs] = defineField('name', {
  initialValue: userStore.name,
});

const [email, emailAttrs] = defineField('email', {
  initialValue: userStore.email,
});

const [password, passwordAttrs] = defineField('password', {
  initialValue: userStore.password,
});

const [role, roleAttrs] = defineField('role', {
  initialValue: userStore.role,
});

const [avatar, avatarAttrs] = defineField('avatar', {
  initialValue: userStore.avatar,
});


const avatarUrl = ref(null);

// الدالة لتغيير الصورة
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    avatarUrl.value = URL.createObjectURL(file); // تحميل الصورة من الملف
    avatar.value = file; // تخزين الملف في avatar
  }
};


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

