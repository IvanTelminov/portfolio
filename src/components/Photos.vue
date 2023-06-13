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
  <el-card class="photos-container">
    <template #header>
      {{header}}
    </template>
    <el-row>
      <el-col :span="12">
        <img :src="urls" />
      </el-col>
      <el-col :span="12">
        <p>{{text}}</p>
      </el-col>
    </el-row>

  </el-card>


<!-- <h1>{{header}}</h1>-->


</template>

<style scoped>
img {
  height: 200px;
}
.photos-container {
  margin-bottom: 20px;
}
</style>