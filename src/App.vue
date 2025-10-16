<script setup>
import { ref } from 'vue';
    let modalActive = ref(false)
</script>
<template>
    <button class="button is-primary" @click="modalActive=true">Open Modal</button>

    <div class="modal" :class="{'is-active': mo}" >
        <div class="modal-background" @click="modalActive=flase"></div>
        <div class="modal-content">
            <p class="image is-4by3">
                <img src="https://bulma.io/assets/images/placeholders/1280x960.png" alt="">
            </p>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="modalActive=flase"></button>
    </div>
</template>