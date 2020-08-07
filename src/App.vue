<template lang="pug">
  #app
    dg-header
    router-view
    dg-footer
</template>

<script>
import DgHeader from './components/DgHeader'
import DgFooter from './components/DgFooter'

export default {
  name: 'App',
  components: {DgHeader, DgFooter},
  mounted () {
    this.$store.dispatch('pullBreeds')
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: linear-gradient(180deg, #1B1A1F 0%, #111013 99.09%);
  overflow: auto;
}

.content {
  padding: 0 60px;
}
</style>
