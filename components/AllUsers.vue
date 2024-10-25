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
                    UIcon(name="heroicons-outline:ellipsis-vertical" :style="{ color: '#98A2B3', fontSize: '24px' }")
                    UIcon(name="heroicons-outline:ellipsis-vertical" :style="{ color: '#98A2B3', fontSize: '24px' }")


  </template>
  
        //- div.pagination
        //-     UButton(icon="tabler:arrow-left" color="#344054" variant="solid" label="previous" class="custom-button")
        //-     UPagination( :model-value="1" :inactive-button="{ color: '#667085' }" :active-button="{ color:'red' , variant: 'outline' }"  :total="100"  :prev-button="null"  :next-button="null" )
        //-     UButton(icon="tabler:arrow-right" color="#344054" variant="solid" label="Next" class="custom-button" icon-position="right")

                    



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
}
</style>


<script lang="ts" setup>

interface User {
  date: string
  name: string
  address: string
}

</script>

