<template>
  <div>
    <h1>United States</h1>
    <locations-table :data="USA" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import LocationsTable from "@/components/LocationsTable.vue";

export default Vue.extend({
  components: {
    LocationsTable
  },
  data() {
    return {
      USA: []
    };
  },
  created() {
    this.$store.dispatch("GET_USA_DATA").then(res => {
      this.USA = res.data.items;
    });
  }
});
</script>
