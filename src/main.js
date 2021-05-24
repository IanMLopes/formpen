import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import ListComponent from './pages/ListComponent'
import AssinaturaComponent from './formularios/AssinaturaComponent'
import SearchComponent from './pages/SearchComponent'

import Form1 from './formularios/Form1'
import Form2 from './formularios/Form2'
import Form3 from './formularios/Form3'
import Form4 from './formularios/Form4'
import FormDireitoDeveres from './formularios/FormDireitoDeveres'
import FormAltaUti from './formularios/FormAltaUti'


FormAltaUti
Vue.config.productionTip = false
Vue.use(VueRouter)


const routes = [
  
     
  { path: '/', name: 'search', component: SearchComponent },
  { path: '/list', name: 'list', component: ListComponent },
  { path: '/ass', name: 'ass', component: AssinaturaComponent },
  { path: '/form1', name: 'form1', component: Form1 },
  { path: '/form2', name: 'form2', component: Form2 },
  { path: '/form3', name: 'form3', component: Form3 },
  { path: '/form4', name: 'form4', component: Form4 },
  { path: '/formdireitodeveres', name: 'formdireitodeveres', component: FormDireitoDeveres },
  { path: '/formaltauti', name: 'formaltauti', component: FormAltaUti },
  
 
]

const router = new VueRouter({
  mode:"history",
  routes // short for `routes: routes`
})

new Vue({

  router,
  render: h => h(App),
}).$mount('#app')

