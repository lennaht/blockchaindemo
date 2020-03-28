<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from './components/Navbar';
export default {
    name: 'App',
    components: {
        Navbar
    }
}
</script>
<style>
html, body {
    margin: 0;
    padding: 0;
    width: 100%
}
</style>