<script setup>
defineProps(['active']);
</script>
<template>
   <div class="modal" :class="{'is-active': active}" >
        <div class="modal-background" @click="active=flase"></div>
        <div class="modal-content">
            <p class="image is-4by3">
                <img src="https://bulma.io/assets/images/placeholders/1280x960.png" alt="">
            </p>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="active=flase"></button>
    </div> 
</template>