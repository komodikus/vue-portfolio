<template>
  <div id="app">
    <HeaderBlock/> 
    <Whoami/>
    <WhatICan/>
    <Timeline/>
    <CVBlock/>
    <GitHubProjects/>
    <FooterBlock/>
  </div>
</template>

<script>
import HeaderBlock from './components/HeaderBlock.vue'
import Whoami from './components/WhoamiBlock.vue'
import WhatICan from './components/WhatICan.vue'
import CVBlock from './components/CVBlock.vue'
import FooterBlock from './components/FooterBlock.vue'
import Timeline from './components/TimelineBlock.vue'
import GitHubProjects from './components/GitHubProjectsBlock.vue'

export default {
  name: 'app',
  components: {
    HeaderBlock,
    Whoami,
    WhatICan,
    CVBlock,
    FooterBlock,
    Timeline,
    GitHubProjects,
  },
  data() {
    return {
      test:"hello",
    }
  },
  methods:{
    

  }
}
</script>

<style>
  html {
  scroll-behavior: smooth;
  }
  body{
    background-color: #2a2931;
    color: white;
    font-family: "Ubuntu-Light";
  }
  .color-blue{
    color: rgb(103,186,205);
  }
  hr{
    border: none;
    height: 2px;
    background:  rgba(103,186,205,1);
    background: -webkit-gradient(linear, 0 0, 100% 0, from(#2a2931), to(#2a2931), color-stop(50%,  rgba(73,161,179,1)));
  }
  @font-face {
    font-family: Ubuntu-Light;
    src: url("assets/fonts/Ubuntu-Light.ttf");
   }
  @font-face {
    font-family: Ubuntu-Medium;
    src: url("assets/fonts/Ubuntu-Medium.ttf");
   }

</style>
