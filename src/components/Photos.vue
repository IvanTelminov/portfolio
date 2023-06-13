<script setup>
const props = defineProps({
  header: String,
  urls: String,
  text: String
})
import {ref} from "vue";
const inputRef = ref(null)
const emit = defineEmits(['comCreated'])
function createCom() {
  const inputElement = inputRef.value
  const coments = inputElement.value
  inputElement.value = ''
  emit("comCreated", coments)
}
</script>



<template>
 <h1>{{header}}</h1>
  <img :src="urls" />
  <p>{{text}}</p>
  <input
      ref="inputRef"
      placeholder="коментарии"
      @keyup.enter="createCom"/>

  <hr>

</template>

<style scoped>
img {
  height: 200px;
}
</style>