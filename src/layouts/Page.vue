<template>
  <div class="container">
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
    <slot></slot>
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
        { label: 'Home', to: '/' },
        { label: 'United States', to: '/united-states' },
        { label: 'International', to: '/international' },
      ],
    };
  },
});
</script>