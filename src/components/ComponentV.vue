<template>
 <div class="global-style component-b">
  <v-btn @click="onClick">Accept
     <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
  </v-btn>

</div>
</template>

<script lang="ts">
import Vue from "vue";
import { VBtn, VIcon } from "vuetify/lib";


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
