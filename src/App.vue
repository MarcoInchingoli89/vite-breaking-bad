<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import { store } from './store.js'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(response => {
          console.log(response.data);
          this.store.characters = response.data;
          console.log(this.store.characters);
        })
    }
  },
  mounted() {
    this.callApi(this.store.api_url);
    console.log(this.store);
  }
}
</script>

<template>
  <AppHeader />
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
          <div v-for="character in store.characters" class="col">
            <div class="character_card">
              <img :src="character.img" alt="">
              <h3>{{ character.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <style lang="scss" scoped>
@use './assets/scss/partials/variables.scss';

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
</style> -->