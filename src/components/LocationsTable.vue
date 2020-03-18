<template>
  <table class="table table-hover table-striped">
    <thead>
      <tr>
        <th class="d-table-cell d-md-none">Location</th>
        <th class="d-none d-md-table-cell">State</th>
        <th class="d-none d-md-table-cell">City</th>
        <th>Title</th>
        <th>Photo</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="location in data"
        :key="location.id"
      >
        <td class="d-table-cell d-md-none">{{location.fields.city}}, {{location.fields.state}}</td>
        <td class="d-none d-md-table-cell">{{location.fields.state}}</td>
        <td class="d-none d-md-table-cell">{{location.fields.city}}</td>
        <td>{{location.fields.title}}</td>
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
  },
});
</script>