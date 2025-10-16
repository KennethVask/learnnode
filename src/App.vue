<script setup>
import { ref } from 'vue';
import Modal from './components/Modal.vue';
    let modalActive = ref(false)
</script>
<template>
    <button class="button is-primary" @click="modalActive=true">Open Modal</button>
    <Modal></Modal>
</template>