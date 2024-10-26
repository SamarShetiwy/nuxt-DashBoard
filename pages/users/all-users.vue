<template lang="pug">
    div.content-header
        div.content
            h1.content_title Users 
            div.button
                UButton(icon="i-heroicons-arrow-down-tray" color="#344054" variant="solid" label="export" class="custom-button" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
                UButton(icon="i-heroicons-plus"  class="custom-button" :style="{ background: 'linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%)',color: '#FFFFFF'  }" variant="solid" label="Add user")
        div.pages
            p Users   
        div.page-info
            div.active.mt-5
                UBreadcrumb( class="custom-breadcrumb" :links="[{ label: 'Active users', to: '/users/all-users ' }, { label: 'Blocked users' ,to: '/users/ '} ] " :style="{ color: 'red' }" )
            //- div.active.mt-5
            //-     p.page-active Active users
            //-     p.page-block Blocked users 
            div.mt-5(class="line") 
        div.search.mt-7
            UInput( icon="i-heroicons-magnifying-glass-20-solid" size="lg"  color="#9D9C99"  placeholder="Search" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
            div
                DatePicker
                UButton(icon="i-heroicons-plus"  class="custom-button"  color="#344054" variant="solid" label="Filters" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
        div
            AllUsers

</template>

<script>

</script>

<style lang="scss">
.content-header{
    width: 80%;
    background-color: #FCFCFD;
    padding: 2rem  2.5rem 0rem 2.5rem;


    &  .content{
        display: flex;
        justify-content: space-between;

        & h1{
            color: #101828;
            font-size: 32px;
            font-weight: 600;
        }
        & .button{
            display: flex;
            gap:1rem;

            &  .custom-button{
                padding: 10px 30px;
            }
        }
    }
    &  .pages{
    }

    &  .page-info{

        &  .active{
        display: flex;
        gap: 1rem;
    
        &  .page-active{
            color: linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%);
            font-size:16px ;
            font-weight: 600px;


        }
        &  .page-block{
            color: linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%);
            font-size:16px ;
            font-weight: 600px;


        }
    }


    }

    & .search{
        display: flex;
        justify-content: space-between;

        & UInput{
           padding: 5rem;
        }
    }

    &  .line{
        width: 100%;
        height: 2px; 
        background-color:#EAECF0;
        transition: background-color 0.3s ease; 

}

}


</style>