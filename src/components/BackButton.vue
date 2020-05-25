<template>
  <div class="col-12 text-center my-2">
    <router-link :to="to" class="btn btn-primary btn-block">
      Go Back
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BackButton',
  props: {
    to: String,
  },
});
</script>