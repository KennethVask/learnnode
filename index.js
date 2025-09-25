let num = 15;
if(num > 10){
    console.log('Bigger than 10');
} else if (num === 10) {
    console.log('Equal to 10');
} else {        
console.log('Smller than 10');
}

let day = new Date("2025-09-28").getDay();
console.log(day);

if(day === 1) {
    console.log("Esmaspäev");
} else if (day === 2) {
    console.log("Teisipäev")
} else if (day === 3) {
    console.log("Kolmapäev")
} else if (day === 4) {
    console.log("Neljapäev")
} else if (day === 5 || day === 6) {
    console.log("Pidupäev")
} else if (day === 0) {
    console.log("Pühapäev")
} else {
    console.log("Imelikpäev")
}

switch(day) {
    case 1:
        console.log("Esmaspäev");
        break;
    case 2:
        console.log("Teisipäev");
        break;
    case 3:
        console.log("Kolemapäev");
        break;
    case 4:
        console.log("Neljapäev");
        break;
    case 5:
    case 6:
        console.log("Pidupäev");
        break;
    case 0:
        console.log("Pühapäev");
        break;
    default:
        console.log("Imelikpäev");
}