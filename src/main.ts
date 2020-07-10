import Vue from "vue";
import App from "./App.vue";
//import router from "./router";
//import store from "./store";
//import vuetify from "./plugins/vuetify";
import VueCompositionApi from "@vue/composition-api";
import * as moment from "moment";
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false;

Vue.use(VueCompositionApi,moment);

new Vue({
  vuetify,

  //router,
  //store,
  //vuetify,
  render: h => h(App)
}).$mount("#app");
