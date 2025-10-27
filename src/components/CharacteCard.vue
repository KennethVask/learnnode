<script setup>
defineProps(['character']);
</script>
<template>
    <div class="card">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">{{ character.name }}</p>
            </header>
        </div>
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="character.image" alt="Placeholder image" />
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                <table class="table is-striped is-hoverable is-fullwidth">
                    <tbody>
                        <tr>
                            <th>Status</th>
                            <td>{{ character.name }}</td>
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>{{ character.gender }}</td>
                        </tr>
                        <tr>
                            <th>Species</th>
                            <td>{{ character.species }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>