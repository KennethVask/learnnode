import './style.scss';

let input = document.querySelector('#new-itme');
let button = document.querySelector('#add-btn');
let list = document.querySelector('#shoppin-list')
button.addEventListener('click', () => {
    let newItem = input.Value;
    list.innerHTML +=`<li>${newItem}</li>`;
    input.value = '';
});

let titel = document.querySelector('#title');
input.addEventListener('input', () => {
    titel.innerHTML = input.value;
});