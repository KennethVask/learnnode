<script setup>
import { computed, onMounted, ref } from 'vue';
import Leaflet from '../components/Leaflet.vue';
import { latLng } from 'leaflet';


let text = ref('Hello World')
function viberate() {
    navigator.vibrate(200);
};
function SMTI() {
    navigator.vibrate([125, 75, 125, 275, 200, 275, 125, 75, 125, 275, 200, 600, 200, 600]);
};
function speak() {
    const utterThis = new SpeechSynthesisUtterance(text.value);
    console.log(selectedVoiceKey.value)
    utterThis.voice = voices.value[selectedVoiceKey.value];
    window.speechSynthesis.speak(utterThis);
};
speechSynthesis.addEventListener('voiceschanged', setVoices);

let voices = ref([]);
function setVoices() {
    voices.value = window.speechSynthesis.getVoices();
};

let selectedVoiceKey = ref(0);
let coords = ref({latitude:0 ,longitude: 0});
function setCoords(){
        navigator.geolocation.getCurrentPosition((position) => {
        coords.value = position.coords;
    });
};
onMounted(() => {
    setCoords();
    setInterval(() => {
        setCoords();
    },30_000)
});

</script>

<template>
    <button class="button is-primary" @click="viberate">Vibrate</button>
    <button class="button is-primary" @click="SMTI">SMTI</button>
    <div class="field has-addons mt-3">
        <div class="control">
            <div class="select">
                <select v-model="selectedVoiceKey">
                    <option v-for="(voice, key) in voices" :value="key">{{ voice.name }}</option>
                </select>
            </div>
        </div>
        <div class="control is-expanded">
            <input class="input" v-model="text">
        </div>
        <div class="control">
            <button class="button is-primary" @click="speak">Speak</button>
        </div>
    </div>
    <Leaflet :lat="coords.latitude" :lng="coords.longitude" :zoom="18"></Leaflet>
</template>