<script setup>
import Photos from "./components/Photos.vue";
</script>


<template>
  <el-link href="/" :underline="false">
    <el-button type="primary" size="large" class="button">дом</el-button>
  </el-link>
<!--  <router-link to="/">Дом</router-link><br>-->


  <router-view></router-view>


<!-- <Photos-->
<!--   header="Поездка в питер"-->
<!--   urls="https://img3.fonwall.ru/o/nq/acura-nsx-white-side-view-supercars.jpeg?route=mid&h=750"-->
<!--   text="Фитографии интересны с точки зрения архитектуры и ракурса"-->
<!--   xurls="https://disk.yandex.ru/d/5MLHLeGNsmp8ew"-->
<!--   />-->

<!-- <Photos-->
<!--     header="Выпускной"-->
<!--     urls="https://img3.fonwall.ru/o/dc/acura-nsx-honda-cars.jpeg?route=thumb&h=350"-->
<!--     text="Фитографии интересны с точки зрения архитектуры и ракурса"-->
<!--     />-->

</template>


<style scoped>

</style>
