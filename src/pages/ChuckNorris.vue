<script setup>
let res = await fetch('https://api.chucknorris.io/jokes/random');
let data = await res.json();
console.log(data);
console.log('Hello');
</script>

<template>

</template>