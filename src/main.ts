import Vue from "vue";
import App from "./App.vue";


import * as moment from "moment";
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueCompositionApi from "@vue/composition-api";

Vue.config.productionTip = false;

Vue.use(VueCompositionApi,moment);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
