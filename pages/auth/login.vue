<template>
  <div class="mt-40 w-full lg:px-10">
    <Errors :errors="user.errors"/>

    <div class="flex items-center justify-center">
      <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <div class="flex justify-center mb-8">
          <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" class="w-30 h-20">
        </div>
        <h1 class="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">Iniciar sesión</h1>
        <form @submit.prevent="submitForm">
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm text-gray-600">Correo electrónico</label>
            <input type="email" id="email" v-model="user.email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-sm text-gray-600">Contraseña</label>
            <input type="password" id="password" v-model="user.password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required>
            <a href="#" class="block text-right text-xs text-cyan-600 mt-2">¿Olvidaste tu contraseña?</a>
          </div>
          <button type="submit" class="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">Acceso</button>
        </form>
        <div class="text-center">
          <p class="text-sm">¿No tienes una cuenta? <nuxt-link to="/auth/register" class="text-cyan-600">Regístrate ahora</nuxt-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Errors from "~/components/general/Errors.vue";
  const user = reactive({
    email: '',
    password : '',
    errors: []
  });

  function submitForm() {
    const auth = useAuth();

    auth.login(user.email, user.password)
        .then(response => {
          if (response.status === 200)
            navigateTo({ path: '/intranet' })
        })
        .catch(error => {
          if (error.response.status === 401) {
            user.errors.push(error.response.data.message)
          }else{
            Object.keys(error.response.data.errors).forEach(field => {
              error.response.data.errors[field].forEach(errorMessage => {
                user.errors.push(errorMessage)
              });
            });
          }
        });

  }
</script>