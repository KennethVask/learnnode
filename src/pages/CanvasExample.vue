<script setup>
import { onMounted } from 'vue';

let x = 95;
let y = 50;

onMounted(()=> {
    let mycanvas = document.querySelector('#mycanvas');
    console.log(mycanvas);
    let ctx = mycanvas.getContext('2d');
    
    setInterval(() => {
        ctx.clearRect(0, 0, 1600, 800)
        ctx.beginPath();
        ctx.arc(x, y, 40, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
        

    }, 16);

});
function keydown(){
    console.log(event );
    if(event.code === 'KeyD'){
        x+=5;
    }
    if(event.code === 'KeyA'){
        x-=5;
    }
    if(event.code === 'KeyS'){
        y+=5;
    }
    if(event.code === 'KeyW'){
        y-=5;
    }
}
</script>

<template>
    <canvas id="mycanvas" tabindex="1" width="1600" height="800" @keydown="keydown"></canvas>
</template>