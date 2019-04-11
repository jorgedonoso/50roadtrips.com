<template>
  <div>
    <h1>International</h1>
    <div
      v-for="country in internationalData"
      :key="country.id"
    >
      <router-link :to="'/international/' + country.fields.countryName.toLowerCase()">
        <h2>{{country.fields.countryName}}</h2>
        <img
          :src="findImageSrcById(country.fields.cover.sys.id, images,768)"
          :alt="'photo in '+country.fields.countryName"
        >
      </router-link>

    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      internationalData: [] as any[],
      images: [] as any[],
    };
  },
  created() {
    this.$store.dispatch('GET_INTERNATIONAL_DATA').then((res) => {
      this.internationalData = res.data.items;
      this.images = res.data.includes.Asset;
    });
  },
});
</script>