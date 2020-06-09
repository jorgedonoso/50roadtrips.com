<template>
  <Page>
    <div class="row">
      
      <div class="col-12 text-center">
        <Title>{{ capitalize($route.params.country) }}</Title>
      </div>
      
      <back-button to="/international"></back-button>
      
      <div class="col-12 my-2 text-center" v-for="photo in imagesForCountry" :key="photo.sys.id">
        <vue-load-image>
          <img slot="image" 
            :src="findImageSrcById(photo.sys.id,InternationalImages,1920)"
            :alt="'Visiting ' + $route.params.country"
            class="img-fluid"/>
          <font-awesome-icon 
            slot="preloader" 
            icon="globe-americas" 
            size="5x" 
            spin 
            class="text-secondary" />
          <div slot="error">Can't load photo</div>
        </vue-load-image>
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
import VueLoadImage from 'vue-load-image';

export default Vue.extend({
  components: {
    Page,
    Title,
    BackButton,
    'vue-load-image': VueLoadImage},
  data() {
    return {
      filteredResults: [] as any,
    };
  },
  computed: {
    ...mapState(['International', 'InternationalImages']),
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