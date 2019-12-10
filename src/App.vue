<template>
  <div id="app">
    <ad-top/>
    <app-navigation/>
    <router-view/>
    <ad-bottom/>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import AdspaceTop from "@/components/AdspaceTop";
import AdspaceBottom from "@/components/AdspaceBottom";
export default {
  name: 'App',
  components:{
    "app-navigation": Navigation,
    "ad-top": AdspaceTop,
    "ad-bottom":AdspaceBottom
  }
}
</script>

<style>
@import "styles/normalize.css";
@import "https://fonts.googleapis.com/css?family=Roboto&display=swap";
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
