<template>
  <table class="table table-hover table-striped">
    <thead>
      <tr>
        <th>State</th>
        <th>City</th>
        <th>Title</th>
        <th>Lon</th>
        <th>Lat</th>
        <th>Map</th>
        <th>Image</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="location in data"
        :key="location.id"
      >
        <td>{{location.fields.state}}</td>
        <td>{{location.fields.city}}</td>
        <td>{{location.fields.title}}</td>
        <td>{{location.fields.coordinates.lon}}</td>
        <td>{{location.fields.coordinates.lat}}</td>
        <td>
          <a
            :href="'https://www.google.com/maps/place/'+location.fields.coordinates.lat+','+location.fields.coordinates.lon"
            target="_blank"
          >Map</a>
        </td>
        <td>
          <router-link :to="'/united-states/' + location.fields.photo.sys.id">Image</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LocationsTable',
  props: {
    data: Array,
  },
});
</script>