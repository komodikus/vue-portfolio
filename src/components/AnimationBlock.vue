<template>
    <div class="animationBlock container p-3 ">
        <div class="d-flex justify-content-around">
            <vue-clap-button size="100" maxClick="9999999" colorActive="rgb(103,186,205)" colorNormal="rgba(73,161,179,1)"/>
            <a href="#" class="cvButton" @click="getCV">HAI</a>
            <vue-clap-button icon="star" size="100" maxClick="9999999" colorActive="rgb(103,186,205)" colorNormal="rgba(73,161,179,1)"/>
        </div>
    </div>
</template>

<script scoped>
import axios from 'axios'
export default {
  name: 'animationBlock',
  data() {
      return {
          
      }
  },
  methods:{
      getCV: function(){
        axios({

            url: "https://docs.google.com/document/d/1CrKxfSdzfQNRCfMeuXXuY8dEE3QJN33pNyyTNEb9MDE/edit#heading=h.6l0vwd4xbgp6",
            method: 'GET',
            responseType: 'blob',
        }).then((response) => {

            var fileURL = window.URL.createObjectURL(new Blob([response.data]));

            var fileLink = document.createElement('a');

        

            fileLink.href = fileURL;

            fileLink.setAttribute('download', 'file.pdf');

            document.body.appendChild(fileLink);

        

            fileLink.click();

});
                    }
        }
}
</script>

<style scoped>
    .animationBlock{
        
    }
</style>