<script setup>
import { ref } from 'vue';

let cookies = ref(0)
</script>

<template>
    <div class="columns">
        <div class="column has-background-primary has-text-centered">
            <h1>{{ cookies }} cookies!</h1>
            <div @click="cookies++">
                <img src="https://png.pngtree.com/png-vector/20201010/ourmid/pngtree-cartoon-coffee-color-cookie-cookie-clipart-png-image_2360157.jpg" alt="">
            </div>
        </div>
        <div class="column has-background-danger">test</div>
        <div class="column has-background-info">test</div>
    </div>
</template>