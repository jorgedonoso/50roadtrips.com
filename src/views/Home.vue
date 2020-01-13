<template>
  <div class="row">
    <div class="col">
      <h1 class="display-1">50 Roadtrips</h1>
      <router-link
        :to="item.to"
        v-for="(item, index) in menu"
        :key="index"
        class="btn btn-block btn-primary"
      >{{item.label}}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "home",
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
