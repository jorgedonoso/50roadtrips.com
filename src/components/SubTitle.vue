<template>
  <h2 class="display-4 text-center">
    <slot></slot>
  </h2>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SubTitle',
});
</script>