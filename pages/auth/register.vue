<template>
  <div class="mt-40 w-full lg:px-10">
    <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
      <div class="flex">
        <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
        <div>
          <p class="font-bold">Our privacy policy has changed</p>
          <p class="text-sm">Make sure you know how these changes affect you.</p>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <div class="flex justify-center mb-8">
          <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" class="w-30 h-20">
        </div>
        <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Registro</h1>
        <form>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm text-gray-600">Nombre usuario</label>
            <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm text-gray-600">Correo electrónico</label>
            <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm text-gray-600">Contraseña</label>
            <input type="password" id="password" name="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
            <a href="#" class="block text-right text-xs text-cyan-600 mt-2">¿Olvidaste tu contraseña?</a>
          </div>
          <button type="submit" class="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">Guardar</button>
        </form>
        <div class="text-center">
          <p class="text-sm">¿Ya tienes una cuenta? <nuxt-link to="/auth/login" class="text-cyan-600">Iniciar ahora</nuxt-link></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { data, pending, error, refresh } = await useFetch('/api/auth/login', {
  onRequest({ request, options }) {
    options.headers = options.headers || {}
    options.headers.authorization = '...'
  },
  onRequestError({ request, options, error }) {
    // Handle the request errors
  },
  onResponse({ request, response, options }) {
    // Process the response data
    localStorage.setItem('token', response._data.token)
  },
  onResponseError({ request, response, options }) {
    // Handle the response errors
  }
})
</script>