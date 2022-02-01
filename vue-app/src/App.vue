<template>
  <div id="app">
        <Header />
       <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  },
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  background-color: #181818;
}
#app{

}
</style>
