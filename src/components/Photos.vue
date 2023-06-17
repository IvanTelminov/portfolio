<script setup>
const props = defineProps({
  header: String,
  urls: String,
  text: String,
  xurls: String
})
import {ref} from "vue";
const inputRef = ref(null)
const emit = defineEmits(['comCreated'])
function bottun (){
  window.location.href=props.xurls}
</script>



<template>
  <el-card class="photos-container">
    <template #header>
      {{header}}
    </template>
    <el-row>
      <el-col :span="10">
        <img :src="urls" />
      </el-col>
      <el-col :span="10">
        <p>{{text}}</p>
      </el-col>
      <el-col :span="4">
        <el-col :span="12">
          <el-button type="success" @click="bottun" round>Подробнее</el-button>
        </el-col>
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