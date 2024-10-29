<template lang="pug">
    UContainer.container
        div.half.half-empty
            div.circle
        div.half.half-form
            UForm.form( :state="state" @submit="OnSubmit()")
                h1 Sign In to your Account
                p Welcome back! please enter your detail
                UInput.input(
                    placeholder="Email" 
                    v-model="email"
                    v-bind="emailAttrs"
                    type="email"
                    icon="i-heroicons-envelope" color="none" variant="none")
                span.error-message(v-if="errors.email") {{ errors.email}} 
                UInput.input( 
                v-model="password"
                type="password"
                v-bind="passwordAttrs"
                :type="showPassword ? 'text' : 'password'" placeholder="Password" icon="ph:lock-key-light" color="none" variant="none")
                    template(#label)
                        UIcon( :icon ="showPassword ? 'mdi-light:eye-off':'mdi-light:eye-off'" @click='togglePasswordView')
                span.error-message(v-if="errors.password") {{ errors.password}}
                div.box
                    UCheckbox.checkbox(v-model="selected" )
                        template( #label)
                            span(style="color: #000000;") Remember me
                    span(style="background: linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;") Forgot Password?
                UButton.bottom(block ) Signup
                div.account.mt-2
                    p.mt-1 Don’t have an account?
                    span Sign Up    
                    
</template>


<script setup lang="ts">
// import LOGIN from '../queries/login.gql';


import { useForm } from 'vee-validate';
import * as yup from 'yup';

definePageMeta({
    layout: "login"
});

const { errors, handleSubmit, defineField ,state } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(''),
    password: yup.string().min(6).required(''),
  }),
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const errorMessage = ref('');
const selected = ref(false);
const ViewPassword = ref('');
const showPassword = ref(false);

function togglePasswordView(){
    showPassword.value = !showPassword.value;
}

const OnSubmit = handleSubmit(async (values) => {
    
    const { email, password } = values
    // console.log(values);
    try{
        const { data } = await useAsyncGql({
        operation: LOGIN,
        variables: { email, password }
    });
        console.log(data);
        
        localStorage.setItem('access_token', data.login.access_token);
        localStorage.setItem('refresh_token', data.login.refresh_token);
        
        } catch(error){
            console.log('<<<<<<<<<<<<<<<login error' , error);
        }
    }
    , (errors) => {
        console.log('>>>>>>>>>>>>> validate-error:', errors)

    })



</script>

<style lang="scss" scoped>
.container{
    & .half{
        & .form{
            width: 404px;
            // & .checkbox{
            //     display: flex;
            //     justify-content: space-between;

                & .error-message{
                    color: red;
                    font-size: 14px;
                    margin-top: 10px;
                }
                
            // }
            & .box{
                display: flex;
                justify-content: space-between;
            }
            & .bottom{
                background: linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%);
                
            }
        }
    }
}

</style>



