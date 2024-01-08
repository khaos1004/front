<template>
    <div>
        <h1>{{ appTitle }}</h1>
        <button class="animate-spin" @click="changeTitle">체인지</button>
    </div>
</template>

<script>
    export default {
        props:['appTitle'],
        methods:{
            changeTitle(){
                this.$emit('change');
            }
        }
    }
</script>
<style scoped>
</style>