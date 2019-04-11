<template>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>State</th>
        <th>City</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="location in data" :key="location.id">
        <td>{{location.fields.title}}</td>
        <td>{{location.fields.state}}</td>
        <td>{{location.fields.city}}</td>
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