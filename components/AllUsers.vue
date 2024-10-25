<template lang="pug">
    div.table.mt-5.pb-11
        div.users
            h1  All users
            UIcon(name="heroicons-outline:ellipsis-vertical" :style="{ color: '#98A2B3', fontSize: '24px'  }")
        UTable(v-model="selected" )
            UTableHead
                UTableRow
                    UTableCell
                        UIcon(name="heroicons-outline:ellipsis-vertical") 
                    UTableCell Name
                    UTableCell Email
                    UTableCell Username
                    UTableCell Mobile number
                    UTableCell Region
                    UTableCell Created at
                        UIcon(name="heroicons-outline:ellipsis-vertical")
                    UTableCell 
            UTableBody
                UTableRow(v-for="(user, index) in people.value" :key="index")
                    UTableCell
                        UIcon(name="heroicons-outline:ellipsis-vertical")
                    UTableCell sam
                        div.avatar
                            UAvatar(
                                size="md"
                                src="../assets/images/Avatar.png"
                                alt="Avatar")
                            div.detail
                                p.name Olivia Rhye
                                p.role Super admin
                    UTableCell samar
                    UTableCell samar
                    UTableCell samar
                    UTableCell samar
                    UTableCell samar
                    UTableCell samar
                    UTableCell
                        div.icons-table
                            UIcon(name="heroicons-outline:ellipsis-vertical")
                            UIcon(name="heroicons-outline:ellipsis-vertical")
        div.pagination
            UButton(icon="tabler:arrow-left" color="#344054" variant="solid" label="previous" class="custom-button")
            UPagination( :model-value="1" :inactive-button="{ color: '#667085' }" :active-button="{ color:'red' , variant: 'outline' }"  :total="100"  :prev-button="null"  :next-button="null" )
            UButton(icon="tabler:arrow-right" color="#344054" variant="solid" label="Next" class="custom-button" icon-position="right")

                    

</template>

<style lang="scss">
.table{
    border: 1px solid #DDDCD8;
    border-radius: 10px;
    width: 100%;

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
    &  .pagination{
        display: flex;
        justify-content: space-between;
        align-items: center;
    .ring-current {
            --tw-ring-color: none;
        .dark\:text-red-400:is(.dark *) {
        --tw-text-opacity: 1;
        color: linear-gradient(90deg, #EF3E2C 0%, #E71F63 100%);
}
}
    }
}
</style>


<script setup lang="ts">

const people = ref('')

const selected = ref([people.value[0]]);
</script>


