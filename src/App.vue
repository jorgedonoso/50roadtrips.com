<template>
  <div
    id="app"
    class="container"
  >
    <div class="row">
      <div class="col-12">
        <ul class="nav justify-content-center my-5">
          <li
            class="nav-item"
            v-for="(item, index) in menu"
            :key="index"
          >
            <router-link
              :to="item.to"
              class="nav-link"
            >{{item.label}}</router-link>
          </li>

        </ul>
      </div>
    </div>
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
import Vue from "vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  components: {
    Footer
  },
  data() {
    return {
      menu: [
        { label: "Home", to: "/" },
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
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>