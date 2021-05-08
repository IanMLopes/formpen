import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import ListComponent from './pages/ListComponent'
import FormComponent from './pages/FormComponent'
import SearchComponent from './pages/SearchComponent'



Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [  
  { path: '/', name: 'search', component: SearchComponent },
  { path: '/list', name: 'list', component: ListComponent },
  { path: '/form', name: 'form', component: FormComponent },
 
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

