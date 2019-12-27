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
    <Footer />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  components: {
    Footer,
  },
  data() {
    return {
      menu: [
        { label: 'United States', to: '/united-states' },
        { label: 'International', to: '/international' },
      ],
    };
  },
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