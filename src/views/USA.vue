<template>
  <Page>
    <div class="row">
      <div class="col-12">
        <Title>United States</Title>
      </div>
      <div class="col-12">
        <locations-table :data="USA" />
      </div>
    </div>
  </Page>
</template>

<script lang="ts">
import Vue from 'vue';
import Page from '@/layouts/Page.vue';
import LocationsTable from '@/components/LocationsTable.vue';
import Title from '@/components/Title.vue';

export default Vue.extend({
  components: {
    LocationsTable,
    Page,
    Title,
  },
  data() {
    return {
      USA: [],
    };
  },
  created() {
    this.$store.dispatch('GET_USA_DATA').then((res) => {
      this.USA = res.data.items;
    });
  },
});
</script>
