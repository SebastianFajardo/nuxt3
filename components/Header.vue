<template>
  <header
      class="flex bg-gray-50/10 w-full py-10 px-5 top-0 z-10 fixed items-center justify-between backdrop-blur-sm dark:bg-gray-980/10">
    <nuxt-link to="/">
      <svg
          class="h-12 w-12"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
              clip-rule="evenodd">

        </path>
      </svg>
    </nuxt-link>
    <nav class="flex gap-x-10 items-center">
      <nuxt-link class="font-medium text-lg text-dark-900/50 dark:text-gray-50/80 hover:text-dark-900"  to="/">
        Home
      </nuxt-link>
      <nuxt-link class="font-medium text-lg text-dark-900/50 dark:text-gray-50/80 hover:text-dark-900" to="/about">
        About
      </nuxt-link>
      <nuxt-link class="font-medium text-lg text-dark-900/50 dark:text-gray-50/80 hover:text-dark-900" to="/auth/login">
        Login
      </nuxt-link>
      <swith-mode/>
    </nav>
  </header>
</template>
<script setup lang="ts">
</script>