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
import companyAccount from './components/companyAccount'

export default {
  name: 'app',
  components: {
    'app-header': header,
    'app-footer': footer,
    'company-account': companyAccount
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
  margin-top: 100px;
  margin-bottom: -460px;
  display: block;
}
</style>
