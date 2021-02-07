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

<script src="./map.js"></script>

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

