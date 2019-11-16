<template>
  <div class="projects" id="my-projects">
    <nav class="d-flex flex-wrap justify-content-around">
      <a href="#my-projects" v-bind:class="{active: activeEl == 1}"  @click="switchView(firstText, 1)">First</a>
      <a href="#my-projects" v-bind:class="{active: activeEl == 2}"  @click="switchView(secondText, 2)">Second</a>
      <a href="#my-projects" v-bind:class="{active: activeEl == 3}"  @click="switchView(thirdthText, 3)">Third</a>
      <a href="#my-projects" v-bind:class="{active: activeEl == 4}"  @click="switchView(fourthText, 4)">Fourth</a>
      
    </nav>
    <p class="text-center about-project">
      {{aboutProject}}
    </p>
  </div>
</template>


<script>
    export default {
    name: 'projects',
    data() {
        return {
          aboutProject:"Hello",
          secondText:"2",
          firstText:"3",   
          thirdthText:"4",
          fourthText:"5",
          activeEl:1,
        }
    },
    methods:{
        switchView: function(view, activeNum){
          this.aboutProject=view
          this.activeEl = activeNum
        }
            }
    }
</script>

<style  scoped>
a{
  text-decoration: none;
  color: white;
  transition: 500ms ease;
}
a:hover{
  transition: 500ms ease;
  color:rgba(103,186,205,1);
}
.about-project{
  transition: all .5s ease-in-out;
}

.active{
  padding: 1em 2em;
  background: rgb(103,186,205);
  background: linear-gradient(90deg, rgba(103,186,205,1) 0%, rgba(73,161,179,1) 50%, rgba(103,186,205,1) 100%);
  color: black; 
}
</style>>

