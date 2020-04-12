<template>
    <Page>
        <div class="row">
            <div class="col-12 mb-4">
                <Title>{{title}}</Title>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="videoWrapper">
                        <iframe :src="`https://www.youtube.com/embed/${videoId}?rel=0&amp;showinfo=0`" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </Page>
</template>
<script lang="ts">
import Vue from 'vue';
import Page from '@/layouts/Page.vue';
import Title from '@/components/Title.vue';

export default Vue.extend({
    props: ['title', 'videoId'],
    components: {
        Page,
        Title,
    },
});
</script>
<style scoped>
.videoWrapper {
  position: relative;
  padding-bottom: 53.5%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}
.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
