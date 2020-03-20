import Vue from 'vue'

// A modern alternative to CSS resets
// https://github.com/necolas/normalize.css
import 'normalize.css/normalize.css'
import './styles/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

import './icons'
import './permission'

// vant
import {
  Button,
  Toast,
  Dialog,
  Field,
  Form,
  Notify,
  Cell,
  CellGroup,
  NavBar
} from 'vant'
Vue.use(Toast)
  .use(Dialog)
  .use(Notify)
  .use(Field)
  .use(Form)
  .use(Button)
  .use(Cell)
  .use(CellGroup)
  .use(NavBar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
