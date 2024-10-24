<template lang="pug">
    UContainer.container
        div.half.half-empty
            div.circle
        div.half.half-form
            UForm.form()
                h1 Sign Up for an Account
                UInput.input(placeholder="Username" icon="ph:user" color="none" variant="none")
                UInput.input(placeholder="Email" icon="i-heroicons-envelope" color="none" variant="none") 
                UInput.input.eye-pass( v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Password" icon="ph:lock-key-light" color="none" variant="none")
                    template(#append)
                        UIcon( :icon ="showPassword ? 'mdi:light--eye-off':'mdi:light--eye-off'" @click='togglePasswordView')
                p.pass Your password must have at least 8 characters
                UCheckbox.checkbox(v-model="selected" color="primary")
                    template( #label)
                        p(style="color: #858589;") 
                            |  By creating an account means you agree to the 
                            span(style="font-weight: bold; color:#000000;") Terms & Conditions
                            |  and our 
                            span(style="font-weight: bold; color:#000000;") Privacy Policy
                UButton.bottom(block) Signup
                div.account.mt-2
                    p.mt-1 Already have an account? 
                    span Log In     
                    
                        
</template>
            
                        

<script setup lang="ts">

const selected = ref(false);
const password = ref();
const showPassword = ref(false);

function togglePasswordView(){
    showPassword.value = !showPassword.value;
}

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