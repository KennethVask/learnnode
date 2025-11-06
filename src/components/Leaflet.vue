<script setup>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon-2x.png'
import 'leaflet/dist/images/marker-shadow.png'
import { onMounted, useId, watch } from 'vue';
let { lat, lng, zoom } = defineProps(['lat', 'lng', 'zoom'])

let id = 'map-' + useId();
let map = null;
onMounted(() => {
    let map = L.map(id).setView([lat, lng], zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([59.42695, 24.74353]).addTo(map);
});

watch(() => zoom, (zoom, oldZoom) => {
    console.log(zoom, oldZoom)
    map.setZoom(zoom)
});
watch(() =>  lat, lat => {
    map.panTo([lat, lng]);
});
watch(() => lng,lng => {
    map.panTo([lat, lng]);
});


</script>

<template>
    <div :id="id"></div>
</template>
<style scoped>
div {height: 80vh;}
</style>