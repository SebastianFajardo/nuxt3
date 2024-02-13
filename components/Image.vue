<template>
  <div>
    <img
        class="rounded-xl h-full object-cover w-full transform transition-all ease-in-out duration-150"
        :src="src"
        width="200" height="200"
        alt="image"/>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    src: String
  })
</script>