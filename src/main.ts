import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/logic/mixin';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_MAPS_KEY,
    libraries: 'places',
  },
  installComponents: true,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
