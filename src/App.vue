<template>
  <div id="app">
    <Header/> 
    <FirstBlock/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import FirstBlock from './components/FirstBlock.vue'


export default {
  name: 'app',
  components: {
    Header,
    FirstBlock,
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
    color: white;
    font-family: "Ubuntu-Light";
  }
  .color-blue{
    color: rgb(103,186,205);
  }

  @font-face {
    font-family: Ubuntu-Light;
    src: url("assets/fonts/Ubuntu-Light.ttf");
   }
  @font-face {
    font-family: Ubuntu-Medium;
    src: url("assets/fonts/Ubuntu-Medium.ttf");
   }




  /* @font-face {
    font-family: BigShouldersText-Light;
    src: url("assets/fonts/BigShouldersText-Light.ttf");
   }
  @font-face {
    font-family: YeonSung-Regular;
    src: url("assets/fonts/YeonSung-Regular.ttf");
   } */
</style>
