<template lang="pug">
        div.account-page-info.pt-0
            div.page-info.mb-5
                div.info.mt-5
                    p Account info
                    div.account-info
                        UForm.form
                            UFormGroup(label="Email" name="Name" :style="{ color: 'red' }")
                            UInput( class="inputStyles" v-model="value"  color="#858589") 
                            
                            UFormGroup(label="Email" name="Email address" :style="{ color: 'red' }")
                            UInput( class="inputStyles" v-model="value"  color="#858589") 
                            
                            UFormGroup(label="Role" name="email" :style="{ color: 'red' }")
                            UInput( class="inputStyles" v-model="value"  color="#858589") 
                            
                        
            div.info-edit.mt-3
                UButton(icon="ph:pencil-simple-line" label="edit" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
</template>

<style lang="scss" scoped>
.container {
    width: 100%;
    // height: 100vh;
}
.account-page-info{
    background-color:#FCFCFD;
    display: flex;
    gap: 2rem;

    &  .info-edit{
        display: flex;
        justify-content: space-between;
        width: 10%;
        height: fit-content;
    }
    & .page-info{
        padding:  0rem 1.5rem;
        width: 80%;

        &  .info{
            padding: 1.5rem;
            background-color: #FFFFFF;


            &  .account-info{
                    
                &  .form{
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                & .inputStyles{
                    border-bottom: '1px solid #DDDCD8';
                    color: red;

                }
            }
        }

    & p{
        font-size: 20px;
        font-weight: 600px;
        color: #101828;
    }
}
}
</style>