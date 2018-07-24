<template>
  <div id="app">
  	<header-fix></header-fix>
    <router-view/>
  </div>
</template>

<script>
import HeaderFix from './components/common/Header'
export default {
  name: 'App',
  components: {
  	HeaderFix
  }
}
</script>

<style>
</style>
