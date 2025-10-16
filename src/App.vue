<script setup>
import { ref } from 'vue';
import Tabs from './components/Tabs.vue';
import Modals from './pages/Modals.vue';
import ToDo from './pages/ToDo.vue';

let tabTitles = ['Pictures', 'Music', 'Videos', 'Document', 'Games'];
let tabContent = [
    'Some cool Pictures',
    'Some cool Music',
    'Some cool Videos',
    'Some cool Documents',
    'Some cool Games',
]
let tabActive = ref(0);

function setActive(key){
    tabActive.value = key;
}

</script>
<template>
    <Tabs :titles="tabTitles" @change="setActive"></Tabs>
    <div class="content">
        <h1>{{ tabContent [tabActive] }}</h1>
    </div>
</template>