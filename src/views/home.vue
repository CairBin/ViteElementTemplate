<script setup>
import { ref,reactive } from "vue";

const data = reactive({
    message: 'Hello,World',
})

</script>

<template>
    <h1>{{data.message}}</h1>
</template>

<style scoped>

</style>