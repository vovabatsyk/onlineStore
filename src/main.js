import Vue from 'vue'
import App from './App'
import BuyDialogComponent from '@/components/Common/BuyDialog'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.component('app-buy-dialog', BuyDialogComponent)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    // Initialize Firebase
    var firebaseConfig = {
      apiKey: 'AIzaSyAXZly8fUY6oFnmmq1kG4gxz6xv1WsxTXM',
      authDomain: 'onlinestore-d643f.firebaseapp.com',
      databaseURL: 'https://onlinestore-d643f.firebaseio.com',
      projectId: 'onlinestore-d643f',
      storageBucket: 'onlinestore-d643f.appspot.com',
      messagingSenderId: '734781171685',
      appId: '1:734781171685:web:d396fb293063bff7'
    }
    fb.initializeApp(firebaseConfig)

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchProducts')
  }
})
