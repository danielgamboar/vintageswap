
<template>
  <v-card class="mx-auto px-6 py-8">
      <h1>¿Así que quieres ser un VintageSwapter?</h1>
      <p>Si, si... tus datos son protegidos 🛡️</p>
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >

      <v-text-field 
        label="Nombre completo" 
        placeholder="Jhon McCool" 
        type="text" 
        v-model="fullName"
        :readonly="loading"
        :rules="[required]"
        class="mb-2"
        clearable
      ></v-text-field>

      <v-text-field 
        label="Correo" 
        placeholder="jmccool@email.com" 
        type="email" 
        v-model="email"
        :readonly="loading"
        :rules="[required]"
        class="mb-2"
        clearable
      ></v-text-field>

      <v-text-field 
        label="Teléfono" 
        placeholder="+34888" 
        type="phone" 
        v-model="phone"
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

      <v-text-field 
        label="Necesitamos confirmar tu contraseña" 
        placeholder="¡Deben ser iguales!" 
        type="password" 
        v-model="confirmPassword"
        :readonly="loading"
        :rules="[required, match]"
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
    ¡Entra al VintageSwapverse!
        </v-btn>
      </v-form>
  </v-card>
</template>

<script >
export default {
  name: 'Login',
  data: () => ({ 
    fullName: '',
    email: '',
    password:'',
    confirmPassword: '',
    phone: '',
    form: false,
    loading: false
  }),
  methods: {
    onSubmit () {
      console.log()
      if (!this.form) return
      console.log(this.email)
      console.log(this.password)
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
    required (v) {
      console.log(v)
        return !!v || '¡Olvidaste rellenar este campo!'
      },
    match () {
      return this.password === this.confirmPassword ? true : 'Las contraseñas no coinciden'

    }
  }
}
</script>
