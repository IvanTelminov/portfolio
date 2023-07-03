<script>
// import Photos from "../components/Photos.vue";

import Photos from "../components/Photos.vue";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      'catalogs': [],
    }
  },
  components: {Photos},
  async created() {
    const instance = axios.create({
      baseURL: 'http://127.0.0.1:8000/'
    })
    const result = await instance.get('/backend/catalogs/')
    console.log(result)
    this.catalogs = result.data
  },
  // mounted() {
  //   console.log('Mounted!')
  // },
}
</script>

<template>
  <h1>HOMeeee</h1><br>

  {{ photos }}

   <Photos
       v-for="c in catalogs"
       :header="c.name"
       :top_images="c.top_images"
       :text="c.description"
       :id="c.id"
     />

<!--   <Photos-->
<!--       header="Выпускной"-->
<!--       urls="https://img3.fonwall.ru/o/dc/acura-nsx-honda-cars.jpeg?route=thumb&h=350"-->
<!--       text="Фитографии интересны с точки зрения архитектуры и ракурса"-->
<!--       xurls="/grad"-->
<!--       />-->


  <router-link to="/piter">Питер</router-link><br>
  <router-link to="/grad">Выпускной</router-link><br>
</template>

<style scoped>

</style>