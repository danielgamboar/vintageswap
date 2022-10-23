<template>

    <!-- <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
  <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="nav-item mt-2">
          <img class='logo' src="../assets/logo-vintageswap.svg" alt="logo"/>
        </router-link>
      </v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    appTitle: 'VintageSwap',
    sidebar: false,
    menuItems: [
      {title: 'Quiénes somos', path: '/home', icon: 'home'},
      {title: 'Registro', path: '/register', icon: 'face'},
      {title: 'Entra', path: '/login', icon: 'lock_open'},
    ]
  }),
}
</script>

<style scoped>
.nav-item {
  cursor: pointer;
}
.logo {
  padding: 0.5rem;
  margin-top: 1vh;
}
</style>