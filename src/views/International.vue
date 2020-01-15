<template>
  <Page>
    <div class="row">
      <div class="col-12">
        <h1 class="display-1 text-center">International</h1>
      </div>
      <div
        class="col-12 col-md-6 col-xl-4"
        v-for="country in internationalData"
        :key="country.id"
      >
        <h2 class="display-4 text-center mt-4">{{country.fields.countryName}}</h2>
        <router-link :to="'/international/' + country.fields.countryName.toLowerCase()">

          <img
            :src="findImageSrcById(country.fields.cover.sys.id, images,768)"
            :alt="'photo in '+country.fields.countryName"
            class="img-fluid"
          >
        </router-link>

      </div>
    </div>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue';
import Page from '@/layouts/Page.vue';

export default Vue.extend({
  components: { Page },
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