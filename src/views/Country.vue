<template>
  <div>
    <h1>{{ capitalize($route.params.country) }}</h1>
    <router-link
      to="/international"
      exact
    >Go Back</router-link>
    <img
      v-for="photo in imagesForCountry"
      :key="photo.sys.id"
      :src="findImageSrcById(photo.sys.id,images,1100)"
      :alt="'Visiting ' + $route.params.country"
      class="img-fluid"
    >
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      countries: [] as any[],
      imagesForCountry: [] as any[],
      images: [] as any[]
    };
  },
  created() {
    this.$store.dispatch("GET_INTERNATIONAL_DATA").then(response => {
      this.countries = response.data.items;
      this.images = response.data.includes.Asset;
      this.checkValidCountry(this.$route.params.country);
    });
  },
  methods: {
    checkValidCountry(countryFromParams: string) {
      // Search all countries for current country.
      const results = this.countries.filter(
        country =>
          country.fields.countryName.toLowerCase() ===
          countryFromParams.toLowerCase()
      );

      // If country isn't found, then go back
      // else grab subset of photos for current country.
      results.length === 0
        ? this.$router.push({ path: "/international" })
        : (this.imagesForCountry = results[0].fields.photos);
    }
  }
});
</script>