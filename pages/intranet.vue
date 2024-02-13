<template>
  <div>
    {{user}}
  </div>
</template>
<script setup lang="ts">
 const user = useUserAuth().getUser()
 console.log(user)
</script>