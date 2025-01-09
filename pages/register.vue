<template lang="pug">
    UContainer.container
        div.half.half-empty
            div.circle
        div.half.half-form
            UForm.form()
                h1 Sign Up for an Account
                UInput.input(
                    placeholder="Username" 
                    v-model="username"
                    v-bind="usernameAttrs"
                    type=""
                    icon="ph:user" variant="none")
                span.error-message(v-if="errors.username") {{ errors.username}} 
                UInput.input(
                    placeholder="Email" 
                    v-model="email"
                    v-bind="emailAttrs"
                    type="email"
                    icon="i-heroicons-envelope" variant="none")
                span.error-message(v-if="errors.email") {{ errors.email}}
                UInput.input.input.eye-pass(
                    placeholder="password" 
                    v-model="password"
                    v-bind="passwordAttrs"
                    type="password"
                    icon="ph:lock-key-light" variant="none")
                span.error-message(v-if="errors.password") {{ errors.password}}
                template(#append)
                        UIcon( :icon ="showPassword ? 'mdi-light:eye-off':'mdi-light:eye-off'" @click='togglePasswordView')
                p.pass Your password must have at least 8 characters
                UCheckbox.checkbox(v-model="selected" color="primary")
                    template( #label)
                        p(style="color: #858589;") 
                            |  By creating an account means you agree to the 
                            span(style="font-weight: bold; color:#000000;") Terms & Conditions
                            |  and our 
                            span(style="font-weight: bold; color:#000000;") Privacy Policy
                UButton.bottom(@click="OnSubmit()" block) SignIn
                div.account.mt-2
                    p.mt-1  Already have an account? 
                    router-link(to="/login") login     
                    
                        
</template>
            
                        

<script setup lang="ts">

import { useForm } from 'vee-validate';
import * as yup from 'yup';
import { useAuthStore } from '../stores/auth';

definePageMeta({
    layout: "login"
});

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    username: yup.string().required(''),
    email: yup.string().email().required(''),
    password: yup.string().min(6).required(''),
  }),
});

const [username, usernameAttrs] = defineField('username');
const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const errorMessage = ref('');
const selected = ref(false);
const ViewPassword = ref('');
const showPassword = ref(false);

const router=useRouter();
const authStore = useAuthStore();


function togglePasswordView(){
    showPassword.value = !showPassword.value;
}

const OnSubmit = handleSubmit((values) => {
    const { username,email, password } = values
    console.log(values);  
    authStore.register(values.username, values.email, values.password);
    router.push('/login');
});


</script>

<style lang="scss" >

.container{
    & .half{
        display: flex;
        width: 50%;
        justify-content: center;
        align-items: center;
    }
    & .half-empty{
        background: linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%);
        
        & .circle{
            background: linear-gradient(179.94deg, rgba(255, 255, 255, 0.06) -5.48%, rgba(255, 255, 255, 0) 96.9%);
            width: 424px;
            height: 424px;
            border-radius: 50%;
        }
    }
    & .half-form{
        padding: 7rem;
        background:#ffff;
        display: flex;
        flex-direction: column;

        & .form{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 5rem 2rem;

            & .error-message{
                color: red;
                font-size: 14px;
                margin-top: 10px;
            }

            & h1{
                font-family: IBM Plex Sans;
                font-size: 24px;
                font-weight: 700;
                line-height: 30px;
                letter-spacing: 0.20000000298023224px;
                text-align: left;
                color: #000000;

            }
            & .input{
                border: 1px solid #DDDCD8;
                background-color: none;
                padding: 8px 16px;
                border-radius: 4px ;
                border: 1px 0px 0px 0px;
                opacity: 0px;
                color: #9D9C99;

            }
            // & .eye-pass{
            //     position: relative;
            //     display: flex;
            //     align-items: center;
            // }
            
            & .pass{
                color: #858589;
                font-size: 12px;
                font-weight: 400px;
            }
            & .checkbox {
            input[type="checkbox"] {
                background: none;  
                border: 1px solid #DDDCD8;  
                // appearance: none;
                width: 20px;
                border-radius: 4px 0px 0px 0px;
                height: 20px;
                border-radius: 4px ;
                cursor: pointer;
                }
                input[type="checkbox"]:checked {
                        background:linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%);
                        border: 1px solid linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%) ;
                }
            }
            & .bottom{
                padding: 8px;
                border-radius: 100px;
                background: #CCCCCC;
                color: #FFFFFF;
            }
            & .account{
                display: flex;
                justify-content: center;
                gap: 0.5rem;
                align-items: center;
                & p{
                    color:#000000;
                    font-weight: 400px;
                }
                & span{
                    color: #EF3E2C;
                    
                }
        }    
        }
    }
}

</style>