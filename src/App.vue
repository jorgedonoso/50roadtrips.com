<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/united-states">United States</router-link> | 
      <router-link to="/international">International</router-link>
    </div>
    <router-view/>
  </div>
</template>