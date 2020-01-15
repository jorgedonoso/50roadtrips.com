<template>
  <Page>
    <div class="row">
      <div class="col-12">
        <Title>{{location[0].fields.title}}</Title>
      </div>
      <div class="col-12">
        <img
          v-show="images.length"
          :src="findImageSrcById($route.params.id, images,1920)"
          :alt="'photo somewhere '"
          class="img-fluid"
        >
      </div>
    </div>
  </Page>
</template>

<script lang="ts">
import Vue from 'vue';
import Page from '@/layouts/Page.vue';
import Title from '@/components/Title.vue';

export default Vue.extend({
  components: {
    Page,
    Title,
  },
  data() {
    return {
      location: [],
      images: [],
    };
  },
  created() {
    this.$store.dispatch('GET_USA_DATA').then((res) => {
      this.location = res.data.items.filter((loc: any) => {
        return loc.fields.photo.sys.id === this.$route.params.id;
      });
      this.images = res.data.includes.Asset;
    });
  },
});
</script>
