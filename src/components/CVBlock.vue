<template>
    <div class="cvBlock container p-3 ">
        <hr>
        <div class="d-flex justify-content-around">
            <a id="cv" href="mycv" class="cvButton" download>DOWNLOAD MY CV</a>
        </div>
        <hr>
    </div>
</template>

<script scoped>

export default {
  name: 'cvBlock',
  data() {
      return {
          
      }
  },
  methods:{
      

        }
}
</script>

<style scoped>
    .cvButton{
        padding: 1em 5em;
        color: aliceblue;
        border: solid 1px white;
        text-decoration: none; 
        font-family: Ubuntu-Medium;
        font-weight: bold; 
        transition: 500ms ease;
    }
    .cvButton:hover{
        border: none;
        transition: 500ms ease;
        color: black;
        background: rgb(103,186,205);
        background: linear-gradient(90deg, rgba(103,186,205,1) 0%, rgba(73,161,179,1) 50%, rgba(103,186,205,1) 100%);
        }
    @media screen and (max-device-width: 420px) {
    .cvButton {
      padding: 1em 3em;
    }
    }
    hr{
        border: none;
        height: 2px;
        background:  rgba(103,186,205,1);
        background: -webkit-gradient(linear, 0 0, 100% 0, from(#2a2931), to(#2a2931), color-stop(50%,  rgba(73,161,179,1)));
        }
</style>