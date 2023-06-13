<script setup>

import Photos from "./components/Photos.vue";
import Coments from "./components/Coments.vue";
import {ref} from "vue";
const coments = ref(['я первый'])
</script>


<template>

 <Photos
   header="Поездка в питер"
   urls="https://img3.fonwall.ru/o/nq/acura-nsx-white-side-view-supercars.jpeg?route=mid&h=750"
   text="Фитографии интересны с точки зрения архитектуры и ракурса"
   />
 <Photos
     header="Выпускной"
     urls="https://img3.fonwall.ru/o/dc/acura-nsx-honda-cars.jpeg?route=thumb&h=350"
     text="Фитографии интересны с точки зрения архитектуры и ракурса"
     />
 <Photos @comCreated="coments.push($event)"/>
 <Coments :coments="coments"/>

</template>


<style scoped>

</style>
