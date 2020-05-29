<template>
  <Page>
    <div class="row">
      
      <div class="col-12 text-center">
        <Title>{{ capitalize($route.params.country) }}</Title>
      </div>
      
      <back-button to="/international"></back-button>
      
      <div class="col-12 my-2" v-for="photo in imagesForCountry" :key="photo.sys.id">

        <img :src="findImageSrcById(photo.sys.id,Images,1920)"
          :alt="'Visiting ' + $route.params.country"
          class="img-fluid" />

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
import { mapState } from 'vuex';

export default Vue.extend({
  components: { Page, Title, BackButton },
  data() {
    return {
      filteredResults: [] as any,
    };
  },
  computed: {
    ...mapState(['International', 'Images']),
    imagesForCountry(): any {
      let res = [];

      if (this.filteredResults.length) { res = this.filteredResults[0].fields.photos; }

      return res;
    },
  },
  async created() {

    await this.$store.dispatch('GET_INTERNATIONAL_DATA');

    this.filteredResults = this.International.filter(
      (country: any) =>  country.fields.countryName.toLowerCase() === this.$route.params.country.toLowerCase(),
    );

    // If country isn't found, then go back
    if (this.filteredResults.length === 0) { this.$router.push({ path: '/international' }); }
  },
});
</script>