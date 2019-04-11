import Vue from 'vue';

Vue.mixin({
    methods: {
        findImageSrcById(id: number, images: any[], width: number): string {
            const url = images.filter((image) => image.sys.id === id);
            return url[0].fields.file.url + '?w=' + width;
        },
    },
});
