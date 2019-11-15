<template>
  <div class="what-i-can" id="whatican">
      <div class="d-flex justify-content-around flex-wrap  mt-3 mb-3">
          <div class="text-left wick">
              <h2 class="">
                What i know?
              </h2>
              <ul>
                <li id="python-image">Python</li>
                <li id="django-image">Django</li>
                <li id="vue-image">Vue</li>
                <li id="docker-image">Docker</li>
                <li id="jenkins-image">Jenkins</li>
                <li id="git-image">Git</li>

              </ul>
          </div>
          <div class="text-right wick">
              <h2 class="color-blue">
                What i can?
              </h2>
              <ul>
                <li>Work hard on the task</li>
                <li class="color-blue">I am able to correctly structure the code, I pay attention to the readability and maintainability of the code.</li>
                <li>I know how to quickly find the right information and use it correctly.</li>
                <li class="color-blue">I’m not shy to ask what I don’t know, and to help where everything is clear to me.</li>
                <li>Communicate with people</li>
                <li class="color-blue">I love new and challenging tasks.</li>
              </ul>
          </div>
      </div>
      <hr>
      <div class="text-center summary mx-auto"> 
        <p>
          Long familiar with python programming language. What about backend? Worked with such frameworks like django and flask.
          When it came time to make the picture beautiful, I met Vue. Tracking code changes and teamwork? Git it is your time.
          After it came time to automate the CI/CD processes, I chose Jenkins, Docker.
         </p>
         <p>
          I can't say that I am a professional in the above. But I like to improve my skills
        </p>
      </div>
      <hr>
  </div>
</template>

<script>
export default {
  name: 'whatICan',
  data() {
      return {
      }
  },
  methods:{

  },
}
</script>


<style scoped>
    .color-blue{
      color: #437cff;
    }
    li{
      list-style: none;
      padding-left: 3em;
      margin-top: 0.4em;
    }
    #docker-image{
      background: url(../assets/img/docker.svg) no-repeat;
    }
    #jenkins-image{
      background: url(../assets/img/jenkins.svg) no-repeat;
      background-size: contain;
    }
    #python-image{
      background: url(../assets/img/python.svg) no-repeat;
      background-size: contain;
    }
    #vue-image{
      background: url(../assets/img/vue.svg) no-repeat;
      background-size: contain;
        }
    #django-image{
      background: url(../assets/img/django.svg) no-repeat;
      background-size: contain;
        }
    #git-image{
      background: url(../assets/img/git.svg) no-repeat;
      background-size: contain;
        }
    .col{
        padding: 0;
        margin: 0;
    }
    .wick{
      max-width: 600px;
      font-size: 2em;
    }
    @media screen and (max-device-width: 700px) {
    .wick {
      width: 300px;
    }
    .text-right{
      display: none;
    }
    }
    .summary{
      font-size: 2em;
      max-width: 900px;
    }
</style>