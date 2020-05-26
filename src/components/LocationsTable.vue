<template>
  <table class="table table-hover table-striped">
    <thead>
      <tr>
        <th class="d-table-cell d-md-none">Location</th>
        <th class="d-none d-md-table-cell">State</th>
        <th class="d-none d-md-table-cell">City</th>
        <th class="d-none d-md-table-cell">Title</th>
        <th class="d-none d-md-table-cell">Resolution</th>
        <th>Photo</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="location in data"
        :key="location.id"
      >
        <td class="d-table-cell d-md-none">{{location.fields.title}} <span class="small d-block">in {{location.fields.city}}, {{location.fields.state}}</span></td>
        <td class="d-none d-md-table-cell">{{location.fields.state}}</td>
        <td class="d-none d-md-table-cell">{{location.fields.city}}</td>
        <td class="d-none d-md-table-cell">{{location.fields.title}}</td>
        <td class="d-none d-md-table-cell">{{imageSizeVerbiage(findImageById(location.fields.photo.sys.id,images).width, findImageById(location.fields.photo.sys.id,images).height)}}</td>
        <td>
          <router-link :to="'/united-states/' + location.fields.photo.sys.id">Photo</router-link>
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
    images: Array,
  },
  methods: {
    imageSizeVerbiage(width: number, height: number) {

      const size = width * height;
      let res = 'High';

      if (size < 2073600) {res = 'Low'; } else if (size < 12000000) {res = 'Medium'; }

      return res;
    },
  },
});
</script>