<template>
  <div id="app">
    <Header/> 
    <FirstEcran/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import FirstEcran from './components/FirstEcran.vue'


export default {
  name: 'app',
  components: {
    Header,
    FirstEcran,
  },
  data() {
    return {
      test:"hello",
    }
  },
}
</script>

<style>
  body{
    background-color: #2a2931;
  }
</style>
