import { LMap, LTileLayer, LMarker, } from "vue2-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
	iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
	iconUrl: require("leaflet/dist/images/marker-icon.png"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
	data() {
		return {
			url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			zoom: 14,
			loaded: false,
			center: [-6.17626763, -253.18260312],
			bounds: null,
		}
	},
	components: {
		LMap,
		LTileLayer,
		LMarker
	},
	props: ['coord'],
	mounted() {
		if (this.coord === undefined) {
			navigator.geolocation.getCurrentPosition(
				({ coords }) => {
					this.center = [coords.latitude, coords.longitude];
					this.$emit('locationFound', this.center);
					this.loaded = true;
				},
				() => {
					this.loaded = true;
					this.$emit('locationFound', this.center);
				}
			);
		} else {
			this.center = this.coord;
			this.loaded = true;
		}
	},
};
