<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        {{ coef }}
        <v-btn
          elevation="2"
          to="/"
        >
          戻る
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="scroll">
          <span>
            <div id="tester"></div>
          </span>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn
          elevation="2"
          to="/"
        >
          戻る
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      data: [{
        x: [
          '2017-01-04',
          '2017-01-05',
          '2017-01-06',
          '2017-01-09',
          '2017-01-10',
          '2017-01-11',
          '2017-01-12',
          '2017-01-13',
          '2017-01-17',
          '2017-01-18',
          '2017-01-19',
          '2017-01-20',
          '2017-01-23',
          '2017-01-24',
          '2017-01-25',
          '2017-01-26',
          '2017-01-27',
          '2017-01-30',
          '2017-01-31',
          '2017-02-01',
          '2017-02-02',
          '2017-02-03',
          '2017-02-06',
          '2017-02-07',
          '2017-02-08',
          '2017-02-09',
          '2017-02-10',
          '2017-02-13',
          '2017-02-14',
          '2017-02-15',
        ],
        y: [
          116.019997,
          116.610001,
          117.910004,
          118.989998,
          119.110001,
          119.75,
          119.25,
          119.040001,
          120,
          119.989998,
          119.779999,
          120,
          120.080002,
          119.970001,
          121.879997,
          121.940002,
          121.949997,
          121.629997,
          121.349998,
          128.75,
          128.529999,
          129.080002,
          130.289993,
          131.529999,
          132.039993,
          132.419998,
          132.119995,
          133.289993,
          135.020004,
          135.509995,
        ],
        mode: 'lines',
      type: 'scatter'
      }],
      // layout: {
      //   height: 400,
      //   width: document.body.clientWidth
      // }
    }
  },
  computed: {
    coef() {
      if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        return 0.93
      } else {
        return 0.75
      }
    },
    layout() {
      return {
         height: 400,
        width: document.body.clientWidth * this.coef,
        margin: {
          l: 50,
          r: 30,
          b: 100,
          t: 100,
          pad: 4
        },
      }
    }
  },
  mounted() {
    window.Plotly.newPlot('tester', this.data, this.layout)
  }
}
</script>

<style>
.scroll{
  overflow: auto;
  white-space: pre;
}
</style>