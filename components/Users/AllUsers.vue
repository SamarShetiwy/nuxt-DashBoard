<template lang="pug">
        div.tableContainer.mt-2.pb-11(style=" border: 1px solid #ddd; border-radius: 8px;")
            div.users
                h1 All users
                UIcon(name="heroicons-outline:ellipsis-vertical" :style="{ color: '#98A2B3', fontSize: '24px' }")
            el-table.tableUser( :data="store.users").flex.gap-5
                el-table-column(type="selection" width="55")
                el-table-column(label="Name" width="200" label-class-name="custom-label")
                    template(#default="scope")
                        div.avatar.flex.gap-2
                            //- el-avatar(src="../assets/images/Avatar (1).png")
                            UAvatar(size="md"  :src="scope.row.avatar" alt="Avatar")
                            div.detail.flex.flex-col
                                p.name {{ scope.row.name }}
                                p.role {{ scope.row.role }}
                el-table-column( property="Email" label="Email" width="150"  label-class-name="custom-label")
                    template(#default="scope") 
                        p {{ scope.row.email }}
                el-table-column(property="Username" label="Username" width="120"  label-class-name="custom-label")
                    template(#default="scope") 
                        p {{ scope.row.name }}
                el-table-column(property="Mobile number" label="Mobile number" width="150"  label-class-name="custom-label")
                    template(#default="scope")
                        p  01002542468
                el-table-column(property="Region" label="Region" width="150"  label-class-name="custom-label")
                    template(#default="scope") 
                        p  {{ scope.row.updatedAt }}
                el-table-column(property="createAt" label="createAt"  width="150"  label-class-name="custom-label")
                    template(#header)  
                        div.flex.gap-3.align-center
                            span CreateAt
                            UIcon(name="solar:arrow-down-linear"  :style="{ color: '#98A2B3', fontSize: '19px' }")
                    template(#default="scope")
                        div.createAt
                        p {{ scope.row.creationAt }}
                el-table-column(property="" label=""  width="200"  label-class-name="custom-label")
                    template(#default="scope")
                        div.icons.flex.gap-5.cursor-pointer.justify-center
                            UIcon(name="mdi:circle-off-outline" :style="{ color: 'red', fontSize: '24px' }"  @click="store.deleteUser(scope.row.id)")
                            //- UIcon(name="heroicons-outline:ellipsis-vertical" :style="{ color: '#98A2B3', fontSize: '24px' }")
                            UDropdown(:items="items(scope.row.id)" :popper="{ placement: 'left' }")
                                UButton(color="#98A2B3" :style="{ fontSize: '35px', color: '#98A2B3' }" label="" trailing-icon="heroicons-outline:ellipsis-vertical")
            div.pagination.mt-5.px-5
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


onMounted(async () => {
  try {
    await store.fetchUsers();
  } catch (error) {
    console.error('Error fetching users:', error);
  }
});

 


</script>




<style lang="scss">

.tableContainer{
    border: 1px solid #DDDCD8;
    border-radius: 10px;
    // width: 100%;
    
    & .custom-label {
        font-size: 1rem; 
        font-weight: bold; 
        color: #333; 
    }

    & .tableUser{
        height: 100vh;
        overflow: scroll;
        // width: 100%;  
    }
    
    & .avatar{
        display: flex;
    }
    &  .users{
        padding: 0.5rem 2rem;
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


