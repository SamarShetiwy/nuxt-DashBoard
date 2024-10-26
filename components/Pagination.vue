<template lang="pug">
    .example-pagination-block
        .example-demonstration 
        el-pagination(layout="prev, pager, next " , :total="30" , :page-count="10" :page-sizes="[10, 20, 30, 40]")

</template>



 <style lang="scss" scoped>
   .example-pagination-block + .example-pagination-block{
    margin-top: 10px;

     & .el-pager li.is-active, .el-pager li:hover {
     color: red; 
    }
   }
   
   
  
    
 </style>

