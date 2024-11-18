<template>
  <nav-bar/>
  <router-view/>
  <footer>
    <h5> </h5>
    
  </footer>
</template>
<script>
import NavBar from './components/NavBar.vue'
 
 
export default {
  components:{
    NavBar,
  }
}
</script>
<style>
#app {
  font-family: auto  sans-serif , Arial, ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
 
</style>
