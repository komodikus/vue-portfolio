<template>
  <div class="projects" id="my-projects">
    <h2 class="text-center">
      PROFESSIONAL EXPERIENCE
    </h2>
    <nav class="d-flex flex-wrap justify-content-around">
      
      <a href="#my-projects" v-bind:class="{active: activeEl == 1}"  @click="switchView(firstText, 1)">{{firstText.header}}</a>
      <a href="#my-projects" v-bind:class="{active: activeEl == 2}"  @click="switchView(secondText, 2)">{{secondText.header}}</a>
      <a href="#my-projects" v-bind:class="{active: activeEl == 3}"  @click="switchView(thirdthText, 3)">{{thirdthText.header}}</a>
      <a href="#my-projects" v-bind:class="{active: activeEl == 4}"  @click="switchView(fourthText, 4)">{{fourthText.header}}</a>
      <a href="#my-projects" v-bind:class="{active: activeEl == 5}"  @click="switchView(fifthText, 5)">{{fifthText.header}}</a>
      <a href="#my-projects" v-bind:class="{active: activeEl == 6}"  @click="switchView(sixthText, 6)">{{sixthText.header}}</a>
      
    </nav>
    <h3 class="text-center">{{mainHeader}}</h3>
    <p class="about-project my-container text-center">
      {{aboutProject}}
    </p>
    <hr>
  </div>
</template>


<script>
    export default {
    name: 'projects',
    data() {
        return {
          firstText: {
            text:`Fully configured automatic assembly, testing and deployment of the project.`,
            header:"Configure CI / CD.",
            keyach: [

            ]
          },   
          secondText: {
            text:`I worked as a fullstack developer to create a Web interface, using Django and Vue.`,
            header:"Build a front and back for ROS."
          },   
          thirdthText: {
            text:`Created website with courses. A personal account of the user, subscription to courses, mailing of letters was implemented, using Django.`,
            header:"Site with training courses."
          },   
          fourthText: {
            text:`Automated most of the work that people did manually.	
Connected and configured the network of one of the offices.`,
            header:"As sysadmin"
          },
          fifthText: {
            text:`Development of a module for ROS, cutting the skin along the contour.`,
            header:"Robot module"
          },
          sixthText: {
            text:`Developed a scraper to download advertisements of the required category from a popular advertisement site.`,
            header:"Avito Scraper"
          },      
          activeEl:1,
          aboutProject:"Fully configured automatic assembly, testing and deployment of the project.",
          mainHeader:"Configure CI / CD.",
        }
    },
    methods:{
        switchView: function(view, activeNum){
          this.mainHeader=view.header
          this.aboutProject=view.text
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
  padding: 0.8em 2em;
  border: solid 3px #437cff;
}
.about-project{
  transition: all .5s ease-in-out;
  background: rgb(103,186,205);
  color: black;
  font-size: 30px;
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
.my-container{
  margin-top:2em;
  margin: auto 2em; 
}
h3{
  margin: 2em; 
}
@media screen and (max-device-width: 500px) {
a {
      display: none;
}
}
</style>>

