<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-light navbar-light justify-content-end shadow">
      <a
        class="navbar-brand mr-auto"
        href="/"
      >50 Roadtrips</a>

      <button
        class="navbar-toggler"
        type="button"
        @click="expandNavbar=!expandNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse flex-grow-0"
        :class="{'show':expandNavbar}"
      >
        <ul class="navbar-nav text-right">
          <li
            class="nav-item active"
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
    </nav>

    <div class="container-fluid pt-4">
      <slot></slot>
      <Footer />
    </div>
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
      expandNavbar: false,
      menu: [
        { label: 'United States', to: '/united-states' },
        { label: 'International', to: '/international' },
      ],
    };
  },
});
</script>