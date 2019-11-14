<template>
  <div class="footer">
    <hr>
    <div class="d-flex wrap justify-content-center footer-icons">
      <a href="#" class="istagram">
        <InstagramIcon class="icon-2x" fillColor="#FF0000"/>
      </a>
      <a href="#" class="linkedin">
        <LinkedinIcon class="icon-2x"/>
      </a>
      <a href="#" class="facebook">
        <FacebookIcon class="icon-2x" />
      </a>
      <a href="#" class="email">
        <EmailIcon class="icon-2x" />
      </a>
      <a href="#" class="telegram">
        <TelegramIcon class="icon-2x" />
      </a>
      <a href="#" class="github">
        <GithubCircleIcon class="icon-2x"/>
      </a>
    </div>
    <div href="#" class="text-center my-end">
      developpedby@komodikus
    </div>
  </div>
</template>


<script>
import InstagramIcon from 'vue-material-design-icons/Instagram.vue';
import GithubCircleIcon from 'vue-material-design-icons/GithubCircle.vue';
import LinkedinIcon from 'vue-material-design-icons/Linkedin.vue';
import FacebookIcon from 'vue-material-design-icons/Facebook.vue';
import TelegramIcon from 'vue-material-design-icons/Telegram.vue';
import EmailIcon from 'vue-material-design-icons/Email.vue';
    export default {
    name: 'footer',
    components: {
    InstagramIcon,
    GithubCircleIcon,
    LinkedinIcon ,
    FacebookIcon,
    TelegramIcon,
    EmailIcon
                },
    data() {
        return {
            
        }
    },
    methods:{
        

            }
    }
</script>

<style  scoped>
    hr{
        border: none;
        height: 2px;
        background:  rgba(103,186,205,1);
        background: -webkit-gradient(linear, 0 0, 100% 0, from(#2a2931), to(#2a2931), color-stop(50%,  rgba(73,161,179,1)));
        }
    .footer-icons{
      margin: 1em 2em;
    }
    .material-design-icon.icon-2x {
      height: 2em;
      width: 2em;
    }
    
    .material-design-icon.icon-2x > .material-design-icon__svg {
      height: 2em;
      width: 2em;
    }
    .my-end{
      margin-bottom: 2em; 
    }

</style>>

