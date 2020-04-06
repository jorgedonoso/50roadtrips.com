<template>
  <h1 class="display-1 mb-5 mt-3 text-center">
    <slot></slot>
  </h1>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Title',
});
</script>