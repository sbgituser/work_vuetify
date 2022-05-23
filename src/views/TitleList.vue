<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-btn @click="test">test</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="tableData"
          :items-per-page="10"
        >
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'タイトル',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: '概要', value: 'overview' },
      ],
      tableData: [],
    }
  },
  mounted() {
    this.axios
      .get(
        "/get-comics"
      )
      .then((response) => (this.tableData = response.data));
  },
  methods: {
    test() {
      console.log(this.tableData)
    }
  }
}
</script>
