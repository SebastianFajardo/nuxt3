<template>
  <div class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert" v-if="errors?.length">
    <p class="font-bold">Errores: {{errors.length}}</p>
    <ul v-for="error in errors">
      <li>{{error}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    errors: Array<string|number>
  })
</script>