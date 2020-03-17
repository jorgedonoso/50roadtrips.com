<template>
  <Page>
    <div class="row">
      <div class="col-12 text-center">
        <Title>{{ capitalize($route.params.country) }}</Title>
      </div>
      <back-button to="/international"></back-button>
      <div
        class="col-12 my-2"
        v-for="photo in imagesForCountry"
        :key="photo.sys.id"
      >

        <img
          :src="findImageSrcById(photo.sys.id,images,1920)"
          :alt="'Visiting ' + $route.params.country"
          class="img-fluid"
        >
      </div>
      <back-button to="/international"></back-button>
    </div>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue';
import Page from '@/layouts/Page.vue';
import Title from '@/components/Title.vue';
import BackButton from '@/components/BackButton.vue';

export default Vue.extend({
  components: { Page, Title, BackButton },
  data() {
    return {
      countries: [] as any[],
      imagesForCountry: [] as any[],
      images: [] as any[],
    };
  },
  created() {
    this.$store.dispatch('GET_INTERNATIONAL_DATA').then((response) => {
      this.countries = response.data.items;
      this.images = response.data.includes.Asset;
      this.checkValidCountry(this.$route.params.country);
    });
  },
  methods: {
    checkValidCountry(countryFromParams: string) {
      // Search all countries for current country.
      const results = this.countries.filter(
        (country) =>
          country.fields.countryName.toLowerCase() ===
          countryFromParams.toLowerCase(),
      );

      // If country isn't found, then go back
      // else grab subset of photos for current country.
      results.length === 0
        ? this.$router.push({ path: '/international' })
        : (this.imagesForCountry = results[0].fields.photos);
    },
  },
});
</script>