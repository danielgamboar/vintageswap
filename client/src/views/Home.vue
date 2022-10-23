<template>
  <v-card
    class="mx-auto"
    max-width="1112"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              fill
              max-height="642px"
            >
              <v-card-title class="text-white" v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-col>
                <v-chip
                v-for="chip, index in chips"
                :key="index" 
                label
                class="'ma-2'
                ">
                  {{chip}}
                </v-chip>
              </v-col>

              <v-col>
                <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-close"></v-btn>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
              </v-col>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
// import image from '../assets'
  export default {
    data: () => ({
      cards: [
        { title: 'Abrigo cachemira', src: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80', flex: 12 },
      ],
      chips: [
        'Talla: M', 'Pecho: 96cm', 'Cadera: 120cm', 'Estado: nuevo', 'Marca: Zara', '150 SP'
      ]
    }),
  }
</script>