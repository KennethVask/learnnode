<script setup>
import { computed, ref } from 'vue';
import ItemList from './ItemList.vue';


let newItem = ref ('');
let i = 1;
let items = ref([
    {id: i++, name:'Leib', isDone: false },
    {id: i++, name:'Sai', isDone: true },
    {id: i++, name:'Õlu', isDone: false },
    {id: i++, name:'Viin', isDone: true },
]);
let code = ref(404);
function addItem(){
    if(newItem.value.trim() !== ''){
    items.value.push({id: i++, name:newItem.value.trim(), isDone: false });
    }
    newItem.value = '';
}
let doneItems = computed(() => {
    return items.value.filter(item => item.isDone);
});
let toDoItems = computed(() => {
    return items.value.filter(item => !item.isDone);
});


</script>
<template>
<div class="container">
    <div class="content">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input v-model="newItem" class="input" type="text" placeholder="Add item" @keydown.enter="addItem">
            </div>
            <div class="control">
                <button class="button is-info" @click="addItem">
                    Add item
                </button>
            </div>
        </div>
        <h1> {{ newItem }}</h1>

        <ItemList :items="items" titel="All Items"></ItemList>
        <ItemList :items="doneItems" titel="Done Items"></ItemList>
        <ItemList :items=" toDoItems" titel="ToDO Items"></ItemList>

   
        <input v-model="code" class="input" type="number" placeholder="Enter Error code">
        <img :src="'https://http.cat/' + code">
    </div>
</div>
</template>