<template lang="pug">
    div.content-header.px-7
        div.content.pt-5
            h1.content_title Users 
            div.button
                UButton(icon="i-heroicons-arrow-down-tray" color="#344054" variant="solid" label="export" class="custom-button px-3 py-2 sm:px-4 sm:py-2" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
                NuxtLink(to="/users/add-user")
                    UButton( icon="i-heroicons-plus"  class="custom-button px-2 py-2 sm:px-5 sm:py-3" :style="{ background: 'linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%)',color: '#FFFFFF'  }" variant="solid" label="Add user")
        div.pages
            p Users   
        div.page-info
            //- div.active.mt-1
            //-     UBreadcrumb(class="custom-breadcrumb")
            //-         div(v-for="(link, index) in links" :key="index")
            //-             a(:href="link.to" :class="{ 'active-link': isActive(link.to) }" :style="isActive(link.to) ? { color: 'red' } : {}")
            //-                 | {{ link.label }}           
            div.active.mt-2
                p.page-active Active users
                p.page-block Blocked users 
            div.mt-5.px-2(class="line")
        div.search.mt-1.p-2
            UInput( icon="i-heroicons-magnifying-glass-20-solid" size="lg"  color="#9D9C99"  placeholder="Search" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
            div
                DatePicker
                UButton(icon="i-heroicons-plus"  class="custom-button px-2 py-2 sm:px-5 sm:py-3"  color="#344054" variant="solid" label="Filters" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
        div
            UsersAllUsers

</template>

<script setup >

const links = [
  { label: 'Active users', to: '/users/all-users' },
  { label: 'Blocked users', to: '/users/all-users' }
];

const route = useRoute();

const isActive = (link) => {
  return route.path === link; 
};

</script>

<style lang="scss">
.content-header{
    width: 100%;
    background-color: #FCFCFD;
    // padding: 2rem 0rem 0rem 2.5rem;
    & .tableUser{
        // height: 325px;
    }
    & .content{
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

    &  .page-info{

        &  .active{
        display: flex;
        gap: 1rem;
    
            &  .page-active{
                font-size:16px ;
                font-weight: 600px;
            }
            &  .page-block{
                font-size:16px ;
                font-weight: 600px;
            }
            &  .page-active:active {
                color: linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%);
                cursor: pointer;

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