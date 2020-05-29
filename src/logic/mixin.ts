import Vue from 'vue';

Vue.mixin({
    methods: {
        findImageById(id: number, images: any[]): string {
            let src: any;

            if (images.length > 0) {
                const url = images.find((image) => image.sys.id === id);
                if (url) {
                    src = url.fields.file.details.image;
                }
            }

            return src;
        },
        findImageSrcById(id: number, images: any[], width: number): string {
            let src: string = '';

            if (images.length > 0) {
                const url = images.find((image) => image.sys.id === id);
                if (url) {
                    src = url.fields.file.url + '?w=' + width;
                }
            }

            return src;
        },
        capitalize(input: string) {
            // Uppercase the first letter by default.
            let out = input.charAt(0).toUpperCase() + input.slice(1);

            // Uppercase all letters if there's a match for one of these countries.
            const allCapsCountries: string[] = ['USA', 'UAE'];
            if (allCapsCountries.indexOf(input.toUpperCase()) > -1) {
                out = input.toUpperCase();
            }

            return out;
        },
    },
});
