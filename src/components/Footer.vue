<template>
  <footer class="text-center m-5">
    50roadtrips.com &copy; {{year}}
    <a
      href="https://www.contentful.com/"
      rel="nofollow"
      target="“_blank”"
      class="d-block mt-2"
    ><img
        src="https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg"
        alt="Powered by Contentful"
        style="max-width: 100px; width: 100%;"
      ></a>
  </footer>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      year: 0 as number,
    };
  },
  created() {
    this.year = new Date().getFullYear();
  },
});
</script>