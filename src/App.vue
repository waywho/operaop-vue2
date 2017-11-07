<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import header from './components/header'
import footer from './components/footer'
import showCompany from './components/showCompany'

export default {
  name: 'app',
  components: {
    'app-header': header,
    'app-footer': footer,
    'show-company': showCompany
  }
}
</script>

<style lang="scss">
@import './styles/global';

#app {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  height: auto !important;
  display: grid;
  grid-template-columns: auto repeat(6, minmax(auto, 280px)) auto;
  grid-template-rows: 100px auto 460px;
  grid-template-areas:
    "header header header header header header header header"
    "main main main main main main main main"
    "footer footer footer footer footer footer footer footer";
  grid-gap: 0px 0px;
  min-width: 320px;
  max-width: 1680px;
  margin: auto;
}


</style>
