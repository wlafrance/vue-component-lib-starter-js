<template>
  <v-btn
    depressed
    :aria-label="ariaLabel"
    :disabled="disabled || loading"
    :loading="loading"
    :absolute="absolute"
    :bottom="bottom"
    :right="right"
    :small="size === 'small'"
    :x-small="size === 'x-small'"
    :text="priority === 'secondary' || type == 'reset'"
    :icon="
      (iconOnly && priority === 'secondary') || (iconOnly && type == 'reset')
    "
    :fab="iconOnlyCalc"
    :color="type === 'reset' ? 'secondary' : color"
    :href="link"
    :target="target"
    :type="type"
    :class="btnClass"
    @click="$emit('btnClick')"
  >
    <v-icon v-if="iconOnlyLocation === 'left'" left>{{ iconCalc }}</v-icon>
    <slot v-if="!iconOnlyCalc"></slot>
    <v-icon v-if="iconOnlyLocation === 'right'" right>{{ iconCalc }}</v-icon>
    <v-icon v-if="iconOnlyCalc">{{ iconCalc }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";
import Vuetify from 'vuetify'
import { VBtn, VIcon } from "vuetify/lib";

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

export default Vue.extend({
  components: {
    VBtn,
    VIcon
  },
  props: {
    size: {
      type: String,
      default: "normal"
    },
    color: {
      type: String,
      default: "primary"
    },
    priority: {
      type: String,
      default: "primary"
    },
    link: {
      type: String,
      default: ""
    },
    target: {
      type: String,
      default: undefined
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    iconOnly: {
      type: Boolean
    },
    ariaLabel: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    iconRight: {
      type: Boolean
    },
    align: {
      type: String,
      default: "left"
    },
    absolute: {
      type: Boolean
    },
    bottom: {
      type: Boolean
    },
    right: {
      type: Boolean
    }
  },
  computed: {
    // Icon Only/Location

    // Set icon by button type
    iconCalc():string {
      if (this.type === "reset") return "mdi-undo";
      else if (this.type === "submit") return "mdi-send";
      return this.icon;
    },
    // Icon only when slot is empty
    iconOnlyCalc() {
      if (this.iconOnly) return true;
      //else if (this.$slots.default) return false;
      return false;
    },
    // Show/hide icons based on icon settings
    iconOnlyLocation() {
      if (this.iconOnlyCalc) return "null";
      else if (
        (this.iconRight && this.iconCalc != "") ||
        this.type === "submit"
      )
        return "right";
      else if (this.iconCalc != "") return "left";
      return "null";
    },

    // CLASSES

    // Adjust spacing based on aligment
    alignClass() {
      if (this.align === "left") return "mr-1";
      else if (this.align === "right") return "ml-1";
      return "mx-h";
    },
    // Adjust text color based on background color
    textColorClass() {
      if (this.color === "warning") return "black--text";
      return "";
    },
    // Combine classes
    btnClass() {
      const btnClass: string = this.alignClass + " " + this.textColorClass;
      return btnClass;
    }
  },
  //render() {
  //  /*
  //   * The container node is expected to provide a single root,
  //   * so it's okay to return `VNode[]` as any.
  //   */
  //  return this.$scopedSlots.default!({}) as any;
  //}
});
</script>
