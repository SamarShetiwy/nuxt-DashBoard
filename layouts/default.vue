<template lang="pug">
    div.container
        Sidebar
        slot
</template>

<style scoped lang="scss">
.container{
    display: flex;
    height: 100vh;
    width: 100%;
}



</style>