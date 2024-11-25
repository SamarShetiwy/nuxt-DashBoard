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
                    UInput( class="input-size1" v-model="value" :style="{color:'#000000', size:'16px' ,boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }") 
                    UInput( class="input-size1" v-model="value" :style="{ color:'#000000' ,boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }") 
                div
            div.account
                div.name
                    p Email address
                div.input
                    UInput( class="input-size2" v-model="value" :style="{ color:'#000000', boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }") 
                div
            div.account
                div.name
                    p Password 
                div.input
                    UInput( class="input-size2" v-model="value" :style="{ color:'#000000', boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF'}") 
                div
            div.account
                div.name
                    p Role
                div.input
                    UInput( class="input-size2" v-model="value" :style="{ color:'#000000', boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }") 
                div
            div.account
                div.name
                    p Photo
                div.input
                    UAvatar( src="https://avatars.githubusercontent.com/u/7547335?v=4" size="2xl")
                    div.file
                        UInput( type="file"  placeholder="click or drag and drop" size="2xs" icon="icon-park:upload-two" class="input-size3" v-model="value" :style="{ }") 
                div
        
        
</template>

<script setup>

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

