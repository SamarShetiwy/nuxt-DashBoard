
<template lang="pug">
    .container
        div.content-header
            div.header
                h1.content_title Users
                div.tabs
                    UBreadcrumb( class="custom-breadcrumb" :links="[{ label: 'Users', to: '/users' }, { label: 'Add User' ,to: '/users/profile '} ] " :style="{ color: 'red' }" )
                div.rest.mt-7
                    div.info
                        p.p1 Add user account
                        p Add photo and personal details here
                    div.button    
                        UButton( color="#344054" variant="solid" size="lg" label="Reset " class="custom-button" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
                        UButton( class="custom-button" size="lg" :style="{ background: 'linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%)',color: '#FFFFFF'  }" variant="solid" label="Add")
                div.line.mt-4  
            div.content
                profile
            div.rest.mt-7
                    div
                    div.button    
                        UButton( color="#344054" variant="solid" size="lg" label="Reset " class="custom-button" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
                        UButton( class="custom-button" size="lg" :style="{ background: 'linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%)',color: '#FFFFFF'  }" variant="solid" label="Add")

</template>

<style lang="scss" scoped>
.container{
    background-color: #FCFCFD;
    
    & .content-header{
        padding:2rem;
        width: 100%;

        & .header{

            & .tabs{
                display: flex;
                gap:0.5rem;

                & .custom-breadcrumb {
                        color: #858589; 
            }
        }
            & .rest{
                display: flex;
                justify-content: space-between;

                & .p1{
                    color: #101828;
                    font-size:16px;
                    font-weight: 600;
                }

                & .button{
                    display: flex;
                    gap: 0.5rem;
                }

            }
        }
        
        & .rest{
            display: flex;
            justify-content: space-between;

            & .button{
                display: flex;
                gap: 0.5rem;
            }
        }
    }
}


</style>