import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SamplePage1 from '../views/SamplePage1.vue'
import SamplePlotly1 from '../views/SamplePlotly1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/',
        name: 'SamplePage1',
        component: SamplePage1
      },
      {
        path: 'plotly1/:id',
        name: 'Plotly1',
        component: SamplePlotly1
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
