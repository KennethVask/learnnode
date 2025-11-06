<script setup>
import { onMounted, ref } from 'vue';
let x = 95;
let y = 50;
let balls = [];
let r = 255;
let b = 0;
let g = 0;
let radius = ref(40);

onMounted(() => {
    let mycanvas = document.querySelector('#mycanvas');
    console.log(mycanvas);
    let ctx = mycanvas.getContext('2d');

    setInterval(() => {
        balls = balls.map(ball => {
            return {
                x: ball.x,
                y: ball.y,
                radius: ball.radius - 1,
                red: ball.red-10,
                green: ball.green+20,
                blue: ball.blue+5,
            }
        }).filter(ball => ball.radius > 0);

        r = Math.round(Math.random()*255);
        g = Math.round(Math.random()*255);
        b = Math.round(Math.random()*255);


        balls.push({
            x: x,
            y: y,
            radius: radius.value,
            red: r,
            green: g,
            blue: b,
        });

        ctx.clearRect(0, 0, 1600, 800)

        balls.forEach(ball => {

            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
            ctx.fillStyle =`rgb(${ball.red},${ball.green},${ball.blue})`;
            ctx.fill();
        })



    }, 16);

});

function mousemove(event) {
    console.log(event);
    x = event.offsetX;
    y = event.offsetY;
}
</script>

<template>
    <div>
        <input v-model="radius" type="range" min="10" max="100" step="1">{{ radius }}
    </div>
    
    <canvas id="mycanvas" tabindex="1" width="1600" height="800" @mousemove="mousemove"></canvas>
</template>