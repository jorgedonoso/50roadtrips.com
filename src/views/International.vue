<template>
  <Page>
    <div class="row">
      <div class="col-12">
        <Title>International</Title>
      </div>
    </div>
    <div class="row">
        <div
          class="col-12 col-md-6 col-xl-4 mb-4 text-center"
          v-for="country in International"
          :key="country.id"
        >
          <sub-title>{{country.fields.countryName}}</sub-title>
          
          <router-link :to="'/international/' + country.fields.countryName.toLowerCase()">
            <vue-load-image>
              <img slot="image" 
                :src="findImageSrcById(country.fields.cover.sys.id, InternationalImages,768)"
                :alt="'Photo in '+country.fields.countryName"
                class="img-fluid"/>
                <font-awesome-icon 
                slot="preloader" 
                icon="globe-americas" 
                size="5x" 
                spin 
                class="text-secondary" />
              <div slot="error">Can't load photo</div>
            </vue-load-image>
          </router-link>

        </div>
      </div>
  </Page>
</template>
<script lang="ts">
import Vue from 'vue';
import Page from '@/layouts/Page.vue';
import Title from '@/components/Title.vue';
import SubTitle from '@/components/SubTitle.vue';
import { mapState } from 'vuex';
import VueLoadImage from 'vue-load-image';

export default Vue.extend({
  components: {
    Page,
    Title,
    SubTitle,
    'vue-load-image': VueLoadImage},
  computed: mapState(['International', 'InternationalImages']),
  async created() {
    await this.$store.dispatch('GET_INTERNATIONAL_DATA');
  },
});
</script>