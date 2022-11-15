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
    },
    onChange() {
      console.log('Sto filtrando...');
      console.log(this.store.selected)
      const selected = this.store.selected
      console.log(selected)
      const url = `${this.store.api_url}?category=${selected}`
      console.log(url)
      this.callApi(url)
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
  <AppMain @filter="onChange" />
</template>

<style lang="scss" scoped>

</style>