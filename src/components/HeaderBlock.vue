<template>
  <div class="header">
    <ul class="nav justify-content-around">
    <li class="nav-item">
        <a class="nav-link active text-link" href="#whoami">Who am i?</a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-link" href="#whatican">My skills</a>
    </li>
    <li class="nav-item">
        <a class="navbar-brand" href="#logo">
            <img v-bind:src="logoPath" id="logo" alt="">
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-link" href="#my-projects">My projects</a>
    </li>
    <li class="nav-item">
        <a class="nav-link text-link" href="#cv">CV</a>
    </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'header-block',
  data() {
      return {
          logoPath: require("../assets/img/komodo.png"),
      }
  },
  methods:{

  },
}
</script>


<style scoped>
    .header{
        padding-top: 1em;
        padding-bottom: 1em;
    }
    #logo{
        height: 40px;
    }
    .text-link{
        color: white;
        transition: 500ms ease;
        background: none;
    }
    .text-link:hover{
        transition: 500ms ease;
        color: black;
        background: rgb(103,186,205);
        background: linear-gradient(90deg, rgba(103,186,205,1) 0%, rgba(73,161,179,1) 50%, rgba(103,186,205,1) 100%);
    }
    .nav{
        background-color: #2a2931;
    }
</style>