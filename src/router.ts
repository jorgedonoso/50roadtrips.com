import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import USA from './views/USA.vue';
import Photo from './views/Photo.vue';
import International from './views/International.vue';
import Country from './views/Country.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/united-states',
      name: 'usa',
      component: USA,
    },
    {
      path: '/united-states/:id',
      component: Photo,
    },
    {
      path: '/international',
      name: 'international',
      component: International,
    },
    {
      path: '/international/:country',
      component: Country,
    },
  ],
});
