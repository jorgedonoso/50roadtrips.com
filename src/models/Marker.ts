export default class Marker {

    // props.
    public photoId: number;
    public position: {
        lat: number;
        lng: number;
    };

    constructor(a: number, b: number, c: number) {
        this.position = { lat: a, lng: b };
        this.photoId = c;
    }
}
