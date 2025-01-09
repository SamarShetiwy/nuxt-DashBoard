<template lang="pug">
    div.table.mt-5.pb-11.w-100
        div.users
            h1 All users
            UIcon(name="heroicons-outline:ellipsis-vertical" :style="{ color: '#98A2B3', fontSize: '24px' }")
        el-table(:data="tableData").d-flex.gap-2
            el-table-column(type="selection" width="55")
            el-table-column(label="Name" width="200")
                template(#default="scope")
                    div.avatar.d-flex.gap-2
                        //- el-avatar(src="../assets/images/Avatar (1).png")
                        UAvatar(size="md"  :src="scope.row.avatar" alt="Avatar")
                        div.detail.d-flex.flex-column
                            p.name {{ scope.row.name }}
                            p.role {{ scope.row.role }}
            el-table-column( property="Email" label="Email" width="120")
                template(#default="scope") {{ scope.row.email }}
            el-table-column(property="Username" label="Username" width="120")
                template(#default="scope") {{ scope.row.name }}
            el-table-column(property="Mobile number" label="Mobile number" width="120")
                template(#default="scope") 01002542468
            el-table-column(property="Region" label="Region" width="120")
                template(#default="scope") {{ scope.row.updatedAt }}
            el-table-column(property="createAt" label="createAt")
                template(#header)  
                    div.d-flex.justify-between.gap-3
                        span createAt
                        UIcon(name="solar:arrow-down-linear" :style="{ color: '#98A2B3', fontSize: '24px' }")
                template(#default="scope")
                    div.createAt
                    p {{ scope.row.creationAt }}
            el-table-column(property="" label="")
                template(#default="scope")
                    div.icons.d-flex.gap-3
                        UIcon(name="mdi:circle-off-outline" :style="{ color: 'red', fontSize: '24px' }"  @click="store.deleteUser(scope.row.id)")
                        //- UIcon(name="heroicons-outline:ellipsis-vertical" :style="{ color: '#98A2B3', fontSize: '24px' }")
                        UDropdown(:items="items(scope.row.id)" :popper="{ placement: 'left' }")
                            UButton(color="#98A2B3" :style="{ fontSize: '35px', color: '#98A2B3' }" label="" trailing-icon="heroicons-outline:ellipsis-vertical")
        div.pagination.mt-5.mx-4
                UButton(icon="tabler:arrow-left" color="#344054" variant="solid" label="previous" class="custom-button" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
                Pagination
                UButton(icon="tabler:arrow-right" color="#344054" variant="solid" label="Next" class="custom-button" icon-position="right" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")

                    

                    

</template>

<script setup lang="ts">

import { useAllUserStore } from '../stores/allUsers.ts';


const router = useRouter();
const store = useAllUserStore();


const items = (id: string | number)=>[
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    shortcuts: ['E'],
    click: () => {
      router.push(`/users/${id}`); 
    }
  }, 
], [{
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }],
]


// import { useAllUserStore } from '../stores/allUsers.ts'; 
// const authStore = useAuthStore(); 

// onMounted(async () => {
    // if (typeof authStore.fetchUsers === 'function') {
    //   await authStore.fetchUsers();
    // } else {
    //   console.error('fetchUsers is not a function');
    // }

// });

const tableData = ref([]);

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    updatedAt: string;
    creationAt: string;
    avatar: string; 
}

onMounted(async () => {
    const token = getAccessToken();

    if (token) {
        const { data, error } = await useAsyncGql("getUsersQuery");

        if (data.value) {
            tableData.value = data.value.users || [];
            console.log(data.value);
        } else if (error.value) {
            console.error("Error loading users:", error.value);
        }
    } else {
        console.error("No token found!");
    }
});

 


</script>
                    



<style lang="scss">

.table{
    border: 1px solid #DDDCD8;
    border-radius: 10px;
    width: 100%;
    
    & .avatar{
        display: flex;
    }
    &  .users{
        padding: 1rem 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &  h1{
        color:#101828;
        font-size: 28px;
        font-weight: 500px;
    }
    }
    & .pagination{
        display: flex;
        justify-content: space-between;
    }
}
</style>


