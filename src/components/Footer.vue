<template>
  <footer class="text-center m-5">
    50roadtrips.com &copy; {{year}}
  </footer>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: function() {
    return {
      year: 0 as number
    };
  },
  created: function() {
    this.year = new Date().getFullYear();
  }
});
</script>