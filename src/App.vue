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
          this.store.characters = response.data.results
          console.log(this.store.characters)
          this.store.status = response.data.info
          console.log(this.store.info)
        })
    }
  },
  mounted() {
    this.callApi(this.store.API_URL)
    console.log(this.store)
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">

</style>