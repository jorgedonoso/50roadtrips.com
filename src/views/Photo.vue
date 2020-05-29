<template>
  <Page v-show="title">
     <div class="container">
    <div class="row">
      <div class="col-12">
        <Title :sub-text="location">{{title}}</Title>
      </div>
      
      <back-button to="/united-states"></back-button>

      <div class="col-12 my-2">
        <img
          :src="findImageSrcById($route.params.id, USAImages, 1920)"
          :alt="'photo somewhere '"
          class="img-fluid w-100" />
      </div>
      
      <back-button to="/united-states"></back-button>

    </div>
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
  components: {
    Page,
    Title,
    BackButton,
  },
  data() {
    return {
      title: '',
      location: '',
    };
  },
  computed: {
    ...mapState(['USA', 'USAImages']),
  },
  async created() {

    await this.$store.dispatch('GET_USA_DATA');

    const locationData = this.USA.find((loc: any) => {
      return loc.fields.photo.sys.id === this.$route.params.id;
    });

    // Redirect if no data, else grab needed fields.
    if (!locationData) {
      this.$router.push('/united-states/');
    } else {
      this.title = locationData.fields.title;
      this.location = locationData.fields.city + ', ' + locationData.fields.state;
    }

  },
});
</script>
