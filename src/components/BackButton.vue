<template>
  <div class="col-12 text-center my-2">
    <router-link :to="to">
      <button class="btn btn-primary btn-block">Go Back</button>
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