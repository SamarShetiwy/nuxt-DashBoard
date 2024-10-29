<template lang="pug">
    div.table.mt-5.pb-11
        div.users
            h1 All users
            UIcon(name="heroicons-outline:ellipsis-vertical" :style="{ color: '#98A2B3', fontSize: '24px' }")
        el-table(:data="tableData" style="width: 100%")
            el-table-column(type="selection" width="55")
            el-table-column(label="Name" width="200")
                template(#default="scope")
                    div.avatar.d-flex.gap-2
                        //- el-avatar(src="../assets/images/Avatar (1).png")
                        UAvatar(size="md" src="../assets/images/Avatar.png" alt="Avatar")
                        div.detail.d-flex.flex-column
                            p.name {{ scope.row.name }}
                            p.role {{ scope.row.role }}
            el-table-column( property="Email" label="Email" width="120")
                //- template(#default="scope") {{ scope.row.date }}
            el-table-column(property="Username" label="Username" width="120")
            el-table-column(property="Mobile number" label="Mobile number" width="120")
            el-table-column(property="Region" label="Region" width="120")
            el-table-column(property="createAt" label="createAt")
                template(#default="scope")
                    div.createAt
                    p {{ scope.row.createAt }}
                    UIcon(name="heroicons-outline:ellipsis-vertical" :style="{ color: '#98A2B3', fontSize: '24px' }")
            el-table-column(property="" label="")
                template(#default="scope")
                    div.icons
                        UIcon(name="mdi:circle-off-outline" :style="{ color: 'red', fontSize: '24px' }")
                        UIcon(name="heroicons-outline:ellipsis-vertical" :style="{ color: '#98A2B3', fontSize: '24px' }")
        div.pagination.mt-5.mx-4
                UButton(icon="tabler:arrow-left" color="#344054" variant="solid" label="previous" class="custom-button" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")
                Pagination
                UButton(icon="tabler:arrow-right" color="#344054" variant="solid" label="Next" class="custom-button" icon-position="right" :style="{ boxShadow: '0px 1px 2px 0px #1018280D', border: '1px solid #DDDCD8', backgroundColor: '#FFFFFF' }")

                    

                    

</template>

<script setup lang="ts">

import getUsersQuery from '../queries/GetUsers.gql'

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
  const { data, error } = await useAsyncGql(getUsersQuery);

  if (data.value) {
    tableData.value = data.value.users || [];
  } else if (error.value) {
    console.error("Error loading users:", error.value);
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


