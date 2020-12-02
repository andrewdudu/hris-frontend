<template>
    <div v-if="loaded" class="map">
        <l-map
            :zoom="zoom"
            :center="center"
        >
            <l-marker :lat-lng="center"/>
            <l-tile-layer :url="url"/>
        </l-map>
    </div>
</template>

<script>
	import Vue from "vue";
	import { LMap, LTileLayer, LMarker, LCircleMarker, LPopup } from "vue2-leaflet";
	import { Icon } from "leaflet";
	import "leaflet/dist/leaflet.css";

	Vue.component("l-map", LMap);
	Vue.component("l-tile-layer", LTileLayer);
	Vue.component("l-circle-marker", LCircleMarker);
	Vue.component("l-marker", LMarker);
	Vue.component("v-popup", LPopup);

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
                        this.$emit('locationFound', null);
                    }
                );
            } else {
				this.center = this.coord;
				this.loaded = true;
            }
		},
	};
</script>

<style>
    .map {
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .vue2leaflet-map {
        z-index: 0;
    }

    .leaflet-control-attribution {
        display: none;
    }
</style>

