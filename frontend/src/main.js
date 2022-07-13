import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import custom_axios from "@/plugins/axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
})
.use(vuetify)
.use(VueAxios, custom_axios)
.$mount('#app')
