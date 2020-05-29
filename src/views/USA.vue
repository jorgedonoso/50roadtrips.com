<template>
  <Page>
    <div class="row">
      <div class="col-12 mb-4">
        <Title>United States</Title>
        <GmapMap
          :center="{ lat: 39.876916, lng: -101.351749 }"
          :zoom="4"
          style="width: 100%; height: 500px"
          map-type-id="hybrid"
          :labels="true"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="false"
            :animation="2"
            @click="handleClick(m.photoId)"
          />
        </GmapMap>
      </div>
      <div class="col-12">
        <SubTitle>Locations</SubTitle>
        <div class="container">
          <locations-table :data="USA" :images="USAImages" />
        </div>
      </div>
    </div>
  </Page>
</template>

<script lang="ts">
import Vue from 'vue';
import Page from '@/layouts/Page.vue';
import LocationsTable from '@/components/LocationsTable.vue';
import Title from '@/components/Title.vue';
import SubTitle from '@/components/SubTitle.vue';
import Marker from '@/models/Marker';
import { mapState } from 'vuex';

export default Vue.extend({
  components: {
    LocationsTable,
    Page,
    Title,
    SubTitle,
  },
  data() {
    return {
      markers: [] as Marker[],
    };
  },
  computed: {
    ...mapState(['USA', 'USAImages']),
  },
  async created() {

    await this.$store.dispatch('GET_USA_DATA');

    this.USA.forEach((element: any) => {
      this.markers.push(
        new Marker(
          element.fields.coordinates.lat,
          element.fields.coordinates.lon,
          element.fields.photo.sys.id,
        ),
      );
    });

  },
  methods: {
    handleClick(id: any) {
      this.$router.push('/united-states/' + id);
    },
  },
});
</script>
