<template>
  <div>
    <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Application
            </v-list-item-title>
            <v-list-item-subtitle>
              subtext
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <router-view />
    </v-main>

    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} - <strong> work-vuetify </strong>
      </v-col>
    </v-footer>

  </div>
</template>

<script>
  export default {
    name: 'HomeView',
    components: {
    },
    data: () => ({ 
      drawer: null,
      items: [
        { title: 'Sample1', icon: 'mdi-view-dashboard', link: {name: 'SamplePage1'}},
      ],
      right: null, 
    }),
    mounted() {

    }
  }
</script>
