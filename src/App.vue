<template>
  <div
    id="app"
    class="container"
  >
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view />
    </transition>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      menu: [
        { label: "United States", to: "/united-states" },
        { label: "International", to: "/international" }
      ]
    };
  }
});
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>