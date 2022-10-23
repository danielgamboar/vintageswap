<template>
  <v-card class="mx-auto px-6 py-8">
    <h1>Hello world</h1>
    <button @click="count++">You clicked me {{ count }} times.</button>

  </v-card>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
    count: 0
  }),
}
</script>
