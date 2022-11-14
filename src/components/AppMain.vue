<script>
export default {
    name: 'AppMain',
}
</script>

<template>
    <div class="container">
        <select class="form-select mb-4" aria-label="Default select example">
            <option selected>Select category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <div class="main_app bg-white py-4">
            <div class="characters_found m-auto"></div>
            <div class="characters_container d-flex justify-content-center py-3 px-3">
                <div class="row row-cols-2 row-cols-md-5">
                    <div class="col">
                        <div class="character_card"></div>
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
        width: 15%;
    }
}

.main_app {
    height: 500px;

    .characters_found {
        height: 50px;
        width: 90%;
        background-color: black;
    }
}

.characters_container {
    width: 90%;

    .col {
        height: 100px;
        width: 50px;
        background-color: $bb-primary;
    }
}
</style>