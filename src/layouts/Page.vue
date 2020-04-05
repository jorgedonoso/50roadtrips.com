<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-light navbar-light justify-content-end shadow fixed-top">
            <a class="navbar-brand mr-auto" href="/"><font-awesome-icon icon="map-signs" /> 50 Roadtrips</a>

            <button class="navbar-toggler" type="button" @click="expandNavbar = !expandNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse flex-grow-0" :class="{ show: expandNavbar }">
                <ul class="navbar-nav text-right">

                    <li v-for="(item, index) in menu" :key="index"
                        class="nav-item dropdown" 
                        :class="{ active: isLinkActive('/'+item.label, $route.path) }">
                        
                        <a :class="['nav-link','dropdown-toggle']" href="#" @click="setSubnav(item.label)">{{item.label}}</a>

                        <div class="dropdown-menu" :class="{ show: expandSub == item.label }">
                            <router-link v-for="(child,subKey) in item.children" :key="subKey" :to="child.to" class="dropdown-item" exact>{{child.label}}</router-link>
                        </div>

                    </li>
                </ul>
            </div>
        </nav>

        <div class="container-fluid pt-4 mt-5">
            <slot></slot>
            <Footer />
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
    components: {
        Footer,
    },
    data() {
        return {
            expandNavbar: false as boolean,
            expandSub: '' as string,
            menu: [
                { label: 'United States',
                    children: [
                        { label: 'Gallery', to: '/united-states' },
                        { label: 'Statistics', to: '/united-states/statistics' },
                    ],
                },
                { label: 'International',
                    children: [{ label: 'Gallery', to: '/international' }],
                },
            ],
        };
    },
    mounted() {
        const children = document.querySelectorAll('.dropdown-item');
        if (children) {
            for (const child of children) {
                child.addEventListener('click', (event) => {
                    this.expandSub = '';
                    this.expandNavbar = false;
                });
            }
        }
    },
    methods: {
        isLinkActive(anyPath: string, actualPath: string) {

            // This is to remove url variables after the relevant path.
            // Ex: "/international/japan" should still highlight the "International" tab.
            const anyPathLength: number = anyPath.length;
            const trimmedActualPath: string = actualPath.substr(
                0,
                anyPathLength,
            );

            return anyPath.replace(' ', '-').toLowerCase() === trimmedActualPath.toLowerCase();
        },
        setSubnav(subClicked: string) {
            this.expandSub = subClicked === this.expandSub ? '' : subClicked;
        },
    },
});
</script>
<style>
body {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
