<template>
  <Page>
    <div class="row">
      <div class="col-12">
        <Title>{{title}}</Title>
      </div>
      <div class="col-12 my-2">
        <img
          v-show="images.length"
          :src="findImageSrcById($route.params.id, images,1920)"
          :alt="'photo somewhere '"
          class="img-fluid"
        >
      </div>
      <back-button to="/united-states"></back-button>
    </div>
  </Page>
</template>

<script lang="ts">
import Vue from 'vue';
import Page from '@/layouts/Page.vue';
import Title from '@/components/Title.vue';
import BackButton from '@/components/BackButton.vue';

export default Vue.extend({
  components: {
    Page,
    Title,
    BackButton,
  },
  data() {
    return {
      title: '',
      images: [],
    };
  },
  created() {
    this.$store.dispatch('GET_USA_DATA').then((res) => {
      this.title = res.data.items.find((loc: any) => {
        return loc.fields.photo.sys.id === this.$route.params.id;
      }).fields.title;

      this.images = res.data.includes.Asset;
    });
  },
});
</script>
