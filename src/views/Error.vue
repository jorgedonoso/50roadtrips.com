<template>
  <Page>
    <div class="row">
      <div class="col-12 text-center">
        <Title>404</Title>
        <font-awesome-icon size="10x" icon="cloud-showers-heavy" />
        <p class="mt-5">Sorry, but this page doesn't exist.<br/><a href="/">Try going to the home page!</a></p>
      </div>
    </div>
  </Page>
</template>

<script lang="ts">
import Vue from 'vue';
import Page from '@/layouts/Page.vue';
import Title from '@/components/Title.vue';

export default Vue.extend({
  components: {
    Page,
    Title,
  },
});
</script>
