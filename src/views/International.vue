<template>
  <div>
    <h1>International</h1>
    <div
      v-for="country in internationalData"
      :key="country.id"
    >
      <router-link :to="'/international/' + country.fields.countryName">
        <h2>{{country.fields.countryName}}</h2>
        <img
          :src="findImageSrcById(country.fields.cover.sys.id)"
          :alt="'photo in '+country.fields.countryName"
        >
      </router-link>

    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "USA",
  data: function() {
    return {
      internationalData: [] as any[],
      images: [] as any[]
    };
  },
  created() {
    this.$store.dispatch("GET_INTERNATIONAL_DATA").then(res => {
      this.internationalData = res.data.items;
      this.images = res.data.includes.Asset;
    });
  },
  methods: {
    findImageSrcById(id: number): string {
      const url = this.images.filter(image => image.sys.id === id);
      return url[0].fields.file.url + "?w=768";
    }
  }
});
</script>