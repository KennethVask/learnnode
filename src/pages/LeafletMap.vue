<script setup>
import { ref } from 'vue';
import Leaflet from '../components/Leaflet.vue';

let zoom = ref(19);
let coords = ref({
    lat:59.42695,
    lng:24.74353
})
</script>
<template>
    <div>
        <input v-model="zoom" type="range" max="19" min="1" step="1">
        {{ zoom }}
        <button class="button is-primary" @click="coords={lat: 59.41641, lng:24.79871}">Go to Airport</button>
    </div>
    <Leaflet :lat="coords.lat" :lng="coords.lng" :zoom="19"></Leaflet>
    <Leaflet :lat="24.74344" :lng="59.42690" :zoom="5"></Leaflet>
</template>


