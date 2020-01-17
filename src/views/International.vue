<template>
  <Page>
    <div class="row">
      <div class="col-12">
        <Title>International</Title>
      </div>
      <div
        class="col-12 col-md-6 col-xl-4 mb-4"
        v-for="country in internationalData"
        :key="country.id"
      >
        <sub-title>{{country.fields.countryName}}</sub-title>
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
import Title from '@/components/Title.vue';
import SubTitle from '@/components/SubTitle.vue';

export default Vue.extend({
  components: { Page, Title, SubTitle },
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