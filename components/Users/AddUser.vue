<template lang="pug"> 
    div.account-page-info
        div.page-info.pt-5
            h2 Account info
        div.info-profile.mt-11
            div.account(class="flex flex-col justify-between align-between gap-2  md:flex-row align-center")
                div.name
                    //- URadio(:style={color: '#FFFFFF'})
                    p Name
                div.input
                        UInput( class="input-size" 
                            v-model="name" 
                            v-bind="nameAttrs" 
                            :style="{color:'#000000', size:'16px' ,boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
                        span.error-message(v-if="errors.name") {{ errors.name }}
                div
            div.account(class="flex flex-col justify-between align-between gap-2  md:flex-row align-center")
                div.name
                    p Email address
                div.input
                    UInput( class="input-size" 
                            v-model="email"  
                            v-bind="emailAttrs"
                            :style="{ color:'#000000', boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }") 
                    span.error-message(v-if="errors.email") {{ errors.email }}
                div
            div.account(class="flex flex-col justify-between align-between gap-2  md:flex-row align-center")
                div.name
                    p Password 
                div.input
                    UInput( class="input-size"
                        v-model="password"  
                        v-bind="passwordAttrs" 
                        :style="{ color:'#000000', boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF'}") 
                    span.error-message(v-if="errors.password") {{ errors.password }}
                div
            div.account(class="flex flex-col justify-between align-between gap-2  md:flex-row align-center")
                div.name
                    p Role
                div.input
                    UInput( class="input-size" 
                        v-model="role"  
                        v-bind="roleAttrs"  
                        :style="{ color:'#000000', boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }") 
                    span.error-message(v-if="errors.role") {{ errors.role }}
                div
            div.account(class="flex flex-col justify-between align-between gap-2  md:flex-row align-center")
                div.name
                    p Photo
                div.input(class="flex flex-col justify-between align-between gap-2  md:flex-row align-center")
                    div.flex.gap-3
                        UAvatar.mt-2(v-if="avatar" :src="avatarUrl" size="2xl")
                        div.mt-2(v-else)
                            UAvatar(:src="'https://avatars.githubusercontent.com/u/7547335?v=4'" size="2xl")
                        div.file
                            UInput(type="file" v-model="avatar"  v-bind="avatarAttrs"  @change="handleFileChange" placeholder="click or drag and drop" size="2xs" icon="icon-park:upload-two"   :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center' }"                            )
                    span.error-message(v-if="errors.avatar") {{ errors.avatar }}
              
                
        
        
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
      return value && value.size <= 2 * 1024 * 1024;  
    })
    .test('fileType', 'Invalid file type', value => {
      return value && ['image/jpeg', 'image/png'].includes(value.type);  
    }),
})
});
const userStore = useUserStore();
// defineProps({
//     newUserStore: Object,
// })

const [name, nameAttrs] = defineField('name', {
    initialValue: '',
});

const [email, emailAttrs] = defineField('email', {
    initialValue: '',
});

const [password, passwordAttrs] = defineField('password', {
    initialValue: '',
});

const [role, roleAttrs] = defineField('role', {
    initialValue: '',
});

const [avatar, avatarAttrs] = defineField('avatar', {
    initialValue: '',
});


const avatarUrl = ref(null); // الرابط الذي يحتوي على الصورة المعروضة

// الدالة للتعامل مع تغيير الملف
const handleFileChange = (event) => {
  const file = event.target.files[0];

  if (file) {
    const validTypes = ['image/png', 'image/jpeg'];
    if (!validTypes.includes(file.type)) {
      errors.value.avatar = 'Invalid file type. Please upload a PNG or JPEG image.';
      return;
    }

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      errors.value.avatar = 'File size is too large. Maximum allowed size is 2MB.';
      return;
    }

    avatarUrl.value = URL.createObjectURL(file);
    avatar.value = file;
    errors.value.avatar = null; 
  } else {
    errors.value.avatar = 'No file selected.';
  }
};

// const handleFileChange = (event) => {
//   const file = event.target.files[0];
//   if (file) {
//     avatarUrl.value = URL.createObjectURL(file);
//     avatar.value = file; 
//   }
// };


</script>

<style lang="scss" scoped>
.account-page-info{
    background-color:#FCFCFD;
    gap: 2rem;

    & .info-profile{
            display: flex;
            flex-direction: column;
            gap: 2rem;
        & .account{
            display: flex;
            // justify-content: space-between;
            // align-items: center;
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
                flex-direction: column;
                gap: 0.3rem;

                & .error-message{
                    color: red;
                    font-size: 14px;
                    margin-top: 10px;
                }
                
                & .input-size{
                    width: 512px;
                    align-content: start;
                    font-size: 16px;
                    font-weight: 400;
                }
                @media (max-width: 657px) {
                        .input-size {
                            width: 300px;
                        }
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
                        padding: 1rem 2rem 1rem 2rem; 
                        }
                    @media (max-width: 657px) {
                        .file {
                            width: 250px;
                            
                        }
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

