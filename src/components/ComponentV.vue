<template>
 <div class="global-style component-v">
  <v-btn @click="onClick">Accept
     <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
  </v-btn>

</div>
</template>

<script lang="ts">
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import "typeface-source-sans-pro";

import Vue from "vue";
import Vuetify from 'vuetify'
import { VBtn, VIcon } from "vuetify/lib";

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

export default Vue.extend({
  name: "JcdcBtn",
 
  components: {
    VBtn,
    VIcon
  },

  computed: {
  
  },
    methods: {
    onClick () {
     alert('You clicked me')
    }}
});
</script>
