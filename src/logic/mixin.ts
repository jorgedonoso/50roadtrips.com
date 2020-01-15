import Vue from 'vue';

Vue.mixin({
    methods: {
        findImageSrcById(id: number, images: any[], width: number): string {
            let src: string = '';

            if (images.length > 0) {
                const url = images.filter((image) => image.sys.id === id);
                src = url[0].fields.file.url + '?w=' + width;
            }

            return src;
        },
        capitalize(input: string) {
            return input.charAt(0).toUpperCase() + input.slice(1);
        },
    },
});
