<template lang="pug">
    UContainer.container
        div.half.half-empty
            div.circle
        div.half.half-form
            UForm.form
                h1 Sign In to your Account
                p Welcome back! please enter your detail
                UInput.input(placeholder="Email" icon="i-heroicons-envelope" color="none" variant="none") 
                UInput.input( v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Password" icon="ph:lock-key-light" color="none" variant="none")
                    template(#label)
                        UIcon( :icon ="showPassword ? 'mdi-light:eye-off':'mdi-light:eye-off'" @click='togglePasswordView')
                div.box
                    UCheckbox.checkbox(v-model="selected" color="primary")
                        template( #label)
                            span(style="color: #000000;") Remember me
                    span(style="background: linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;") Forgot Password?
                UButton.bottom(block) Signup
                div.account.mt-2
                    p.mt-1 Don’t have an account?
                    span Sign Up    
                    
                        
</template>
            
                        

<script setup lang="ts">


const selected = ref(false);
const password = ref();
const showPassword = ref(false);

function togglePasswordView(){
    showPassword.value = !showPassword.value;
}
</script>

<style lang="scss" scoped>
.container{
    & .half{
        & .form{
            width: 404px;
            // & .checkbox{
            //     display: flex;
            //     justify-content: space-between;
                
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