import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import USA from '@/views/USA.vue';
import Photo from '@/views/Photo.vue';
import International from '@/views/International.vue';
import Country from '@/views/Country.vue';
import Statistics from '@/views/Statistics.vue';
import Video from '@/views/Video.vue';
import Error from '@/views/Error.vue';

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
            path: '/united-states/statistics',
            component: Statistics,
        },
        {
            path: '/united-states/video',
            component: Video,
            props: {
                title: 'United States Video',
                videoId: process.env.VUE_APP_USA_VIDEO,
            },
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
            path: '/international/video',
            component: Video,
            props: {
                title: 'Honeymoon',
                videoId: process.env.VUE_APP_INTERNATIONAL_VIDEO,
            },
        },
        {
            path: '/international/:country',
            component: Country,
        },
        {
            path: '/*',
            component: Error,
        },
    ],
});
