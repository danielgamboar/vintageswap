
<template>
  <v-card class="mx-auto px-6 py-8">
      <h1 class="title">¡Te extrañamos!</h1>
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >

      <v-text-field 
        label="Correo" 
        placeholder="usuario@email.com" 
        type="email" 
        v-model="email"
        :readonly="loading"
        :rules="[required]"
        class="mb-2"
        clearable
      
      ></v-text-field>
      <v-text-field 
        label="Contraseña" 
        placeholder="Contraseña indescifrable" 
        type="password" 
        v-model="password"
        :readonly="loading"
        :rules="[required]"
        clearable
      ></v-text-field>
      <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
    ¡Vamos!
        </v-btn>
      </v-form>
  </v-card>
</template>

<script >
// import {useAuthStore } from "@/stores"

export default {
  name: 'Login',
  data: () => ({ 
    email: '',
    password:'',
    form: false,
    loading: false
  }),
  methods: {
    onSubmit () { 
      // const authStore = useAuthStore()

        
      console.log()
      
      if (!this.form) return

      console.log(this.email)
      console.log(this.password)

      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    required (v) {
        return !!v || '¡Olvidaste rellenar este campo!'
      },
  }
}
</script>

<style scoped>
  .title {
    font-family: 'AndadaPro';
    font-weight: bold;
  }
</style>