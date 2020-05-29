<template>
  <div class="mb-4 mt-3 text-center">
    <h1 class="display-1">
      <slot></slot>
    </h1>
    <h2>{{subText}}</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: ['subText'],
  name: 'Title',
});
</script>