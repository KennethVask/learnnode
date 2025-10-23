<script setup>
import axios from 'axios';
import CharacterCard from '../components/CharacteCard.vue'
import { ref } from 'vue';

let characters = ref([]);
let info = ref({
    count: 0,
    pages: 0,
    next: null,
    prev: null,
})

async function getCharacters(url) {
    let res = await axios.get();
    console.log(res);
    characters.value = res.data.results;
}

await getCharacters('https://rickandmortyapi.com/api/character')
</script>
<template>
<div class="my-2 is-flex is-justify-content-space-between">
    <button class="button is-primary" :disabled="!info.prev" @click="getCharacters(info.next)"">Prev</button>
    <button class="button is-primary" :disabled="!info.next" @click="getCharacters(info.next)"">Next</button>
</div>

    <div class="columns is-multiline">
        <div class="column is-3" v-for="character in characters">
            <CharacterCard :character="character"></CharacterCard>
        </div>
    </div>
</template>