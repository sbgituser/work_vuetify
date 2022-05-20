<template>
  <v-container>
    <v-row>
      <template v-for="category in categories">
        <v-col
          :key="category.id"
          class="mt-2"
          cols="12"
        >
          <strong>Category {{ category.name }}</strong>
        </v-col>
        <v-col
          v-for="data in category.data"
          :key="data.cap"
          cols="4"
          md="2"
        >
          <router-link 
            :to="'Plotly1/' + data.id"
            :target-data="data.cap">
            <v-img :src="data.url" />
          </router-link>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        categories: [
          {id: 1, name: 'c1', data: [
            {id: '1-1', cap: 'test1-1', url: 'https://placehold.jp/3d4070/ffffff/150x150.png'},
            {id: '1-2', cap: 'test1-2', url: 'https://placehold.jp/3d4070/ffffff/150x150.png'},
            {id: '1-3', cap: 'test1-3', url: 'https://placehold.jp/3d4070/ffffff/150x150.png'}
          ]},
          {id: 2, name: 'c2', data: [
            {id: '2-1', cap: 'test2', url: 'https://placehold.jp/ff4070/ffffff/150x150.png'}
          ]},
          {id: 3, name: 'c3', data: [
            {id: '3-1', cap: 'test3', url: 'https://placehold.jp/3d4070/ffffff/150x150.png'}
          ]},
        ],
      }
    },
  }
</script>
