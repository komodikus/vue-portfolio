<template>
  <div class="what-i-can">
      <div class="d-flex justify-content-around flex-wrap  mt-3 mb-3">
          <div class="text-left wick">
              <h2>
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
              <p>
                Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! 
              </p>
          </div>
          <div class="text-right wick">
              <h2>
                What i can?
              </h2>
              <p>
                Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! Lorus pututs! 
              </p>
          </div>
      </div>
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
    }
</style>