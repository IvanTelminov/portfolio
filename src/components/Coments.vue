<script setup>
defineProps({
  coments: Array,
})
</script>

<template>
<ul>
  <li v-for="c in coments">
    {{c}}
  </li>
</ul>
</template>

<style scoped>

</style>