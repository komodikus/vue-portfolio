<template>
  <div class="first-block">
      <h1 class="main-header text-center">
        <span class="color-blue">
        &lt;b&gt;</span>Hello<span class="color-blue">&lt;/b&gt;</span>
        <p class="color-blue">I’m Eugene,</p> <p>Python Developer</p>
        </h1>
        <div class="description text-center">
          I’m true full-stack software engineer with deep knowledge of back-end, front-end and dev-ops technologies and tools. Passionate on delivering the best results working with a small and focused team. I really enjoy the awesomeness of full-stack software development and have contributed to various open source projects. I’m inspired by building software architecture, solving difficult and interesting problems.

        </div>
      <div class="d-flex justify-content-around flex-wrap  mt-3 mb-3">
          <div class="text-left wick">
              <h2>
                What i know?
              </h2>
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
  name: 'firstBlock',
  data() {
      return {
      }
  },
  methods:{

  },
}
</script>


<style scoped>
    .first-block{
        height: 100vh;
        /* background: url("../assets/img/pythonbg1.png"); */
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .col{
        padding: 0;
        margin: 0;
    }
    .main-header{
      font-size: 6em;
      line-height: 80px;
      font-weight: 700;
      margin: 0.5em 0.5em;
      font-family: "Ubuntu-Medium";
      margin-bottom: 0; 
    }
    .description{
      font-family: "Ubuntu-Light";
      line-height: 40px;
      font-size: 2.5em;
      padding: 1em;
      margin: 0.7em;
      margin-top: 0; 
      line-height: 1.1em;
    }
    .wick{
      max-width: 600px;
      
    }
    @media screen and (max-device-width: 700px) {
    .wick {
      width: 300px;
    }
    }
    
</style>