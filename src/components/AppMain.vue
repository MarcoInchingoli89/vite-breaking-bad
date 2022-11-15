<script>
import { store } from '../../src/store'
export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    computed: {
        totalCharacters() {
            return this.store.characters.length;
        }
    }
}
</script>

<template>
    <div class="container">
        <select v-model="store.selected" @change="$emit('filter')" class="form-select mb-4"
            aria-label="Default select example">
            <option disabled value="">Select category</option>
            <option value="Breaking+Bad">Breaking Bad</option>
            <option value="Better+Call+Saul">Better Call Saul</option>
        </select>
        <div class="main_app bg-white py-4">
            <div class="characters_found m-auto">
                <h5 class="text-white py-2 px-2" v-if="store.characters !== null">Found {{ totalCharacters }} characters
                </h5>
            </div>
            <div class="characters_container d-flex justify-content-center py-3 px-3">
                <div class="row row-cols-2 row-cols-md-5 gap-4 justify-content-center">
                    <div v-for="character in store.characters" class="col">
                        <div class="character_card card rounded-0 h-100 bg-dark text-white p-2">
                            <img class="text-center" :src="character.img" alt="">
                            <h6 class="py-1">{{ character.name }}</h6>
                            <div class="category py-2">{{ character.category }}</div>
                            <div class="status">{{ character.status }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

.container {
    width: 70%;

    .form-select {
        width: 20%;
    }
}

.main_app {

    width: 80%;

    .characters_found {
        height: 50px;
        width: 90%;
        background-color: black;
    }
}

.characters_container {

    .col {
        width: 150px;
        background-color: $bb-primary;
    }
}
</style>