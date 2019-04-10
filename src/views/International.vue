<template>
  <div>
    <h1>International</h1>
    <ul>
      <li v-for="country in International" :key="country.id">
        <router-link :to="'/international/' + country.fields.countryName">{{country.fields.countryName}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'USA',
  data: function(){
    return {
      International: []
    }
  },
  created(){
    this.$store.dispatch("GET_INTERNATIONAL_DATA").then((res) => {
      this.International = res.data.items;
    });
  }
});
</script>