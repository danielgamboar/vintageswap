<template>
  <v-app>
    <NavBar/>
  </v-app>
</template>

<script>
import NavBar from '@/views/NavBar.vue'

export default {
  name: 'App',

  components: {
    NavBar
  },

  data: () => ({
    //
  }),
}
</script>

<style lang="scss">
html, body, #app {
  height: 100%;
  margin: 0;
  max-width: 1920px ;
  max-width: 1080px;
}
</style>