<script setup>
import {onMounted} from "vue";

onMounted(() => {
  console.log(`the component is now mounted.`)
})



</script>

<template>
  <h2>Grad</h2>
  <el-card class="box-card">
    <template #header>
      <span>Выпускной</span>
    </template>
  </el-card>
</template>

<style scoped>

</style>