<template>
  <div class="projects" id="my-projects">
    <h2 class="text-center">
      What projects have I worked on?
    </h2>
    <nav class="d-flex flex-wrap justify-content-around">
      
      <a href="#my-projects" v-bind:class="{active: activeEl == 1}"  @click="switchView(firstText, 1)">Configure CI / CD.</a>
      <a href="#my-projects" v-bind:class="{active: activeEl == 2}"  @click="switchView(secondText, 2)">Build a front and back for ROS.</a>
      <a href="#my-projects" v-bind:class="{active: activeEl == 3}"  @click="switchView(thirdthText, 3)">Site with training courses.</a>
      <a href="#my-projects" v-bind:class="{active: activeEl == 4}"  @click="switchView(fourthText, 4)">Shop streaming and people identification</a>
      
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
          firstText:"3",   
          secondText:"2",
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
  padding: 1em 2em;
  border: solid 3px #437cff;
}
.about-project{
  transition: all .5s ease-in-out;
}
h2{
  margin-bottom: 2em;
  font-weight: 700;
}
.active{
  padding: 1em 2em;
  background: rgb(103,186,205);
  background: linear-gradient(90deg, rgba(103,186,205,1) 0%, rgba(73,161,179,1) 50%, rgba(103,186,205,1) 100%);
  color: black; 
}
@media screen and (max-device-width: 500px) {
a {
      display: none;
}
}
</style>>

