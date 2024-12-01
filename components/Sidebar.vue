<template lang="pug">
    aside
        ul
            li(v-for="link in links" :key="link.label")
                a(v-if="link.to", :href="link.to")
                    UIcon.icon(:name="link.icon")
                    |  {{ link.label }}
                div(v-else-if="link.select")
                    div.dropdown-trigger(@click="link.label === 'Content' ? contentDropdownVisible = !contentDropdownVisible : appManagementDropdownVisible = !appManagementDropdownVisible")
                        div.dropdown
                            UIcon.icon(:name="link.icon")
                            |  {{ link.label }}
                        UIcon.icon(name="mdi:chevron-down")
                    div.dropdown-menu(v-if="link.label === 'Content' ? contentDropdownVisible : appManagementDropdownVisible")
                        ul
                            li(v-for="option in contentOptions" :key="option")
                                USelect(v-model="selectedContent" :options="contentOptions")
                                |  {{ option }}
                    div.dropdown-menu(v-if="link.label === 'App management' ? appManagementDropdownVisible : false")
                        ul
                            li(v-for="option in appManagementOptions" :key="option")
                                USelect(v-model="selectedAppManagement" :options="appManagementOptions")
                                |  {{ option }}
        div.admin
            div.avatar
                UAvatar(
                    size="md"
                    src="../assets/images/Avatar.png"
                    alt="Avatar")
                div.detail
                    p.name Olivia Rhye
                    p.role Super admin
            UIcon(name="cuida:logout-outline" style="color:#667085;font-size: 24px;" @click="handleLogout()")
</template>


<script setup lang="ts">

import { ElMessageBox } from 'element-plus';
import { useAuthStore } from '../stores/auth.js';


const contentOptions = ['Blog', 'Article']; 
const appManagementOptions = ['Settings', 'Roles'];

const links = [{
    label: 'Home',
    icon: 'cil:home',
    to: '/'
}, {
    label: 'Users',
    icon: 'ph:users-four',
    to: '/users/all-users'
}, {
    label: 'Experts',
    icon: 'hugeicons:time-setting-03',
    to: '/Experts'
}, {
    icon: 'bx:book-content',
    to: null,
    label: 'content', 
    select: true 
}, {
    label: 'Rooms ',
    icon: 'jam:messages-alt',
    to: '/'
}, {
    label: 'App management ',
    icon: 'ph:note-pencil',
    select: true,
}
]

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  authStore.logout(router); 
};

</script>


<style scoped lang="scss">
aside{
    background-color: #f0f0f0;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & ul{
        padding: 5rem 2rem;
        display:flex;
        flex-direction: column;
        gap:0.5rem;
        
        & li{

            & a{
                display: flex;
                align-items: center;
                gap:0.9rem;
                color: #000000;
                font-size: 16px;
                font-weight: 500px;

                & .icon{
                color:#000000;
            }
            }
            & .dropdown-trigger{
                display: flex;
                align-items: center;
                justify-content: space-between;
                
                & .dropdown{
                display: flex;
                align-items: center;
                gap:0.9rem;
                color:#000000;

                &  .icon{
                    color:#000000;
                }
                }
                &  .icon{
                    color:#000000;
                }
            }
        }
    }
    & .admin{
        display: flex;
        align-items: center;
        padding: 1rem;
        justify-content: space-between;
        
        & .avatar{
            display: flex;
            gap:0.5rem;

            & .detail{

                & .name{
                    color: #101828;
                }
                & .role{
                    color: #475467;
                }
                }
        & .icon{
            color: #667085;
        }
        }
    }
}
</style>