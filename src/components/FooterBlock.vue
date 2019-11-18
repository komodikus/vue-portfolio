<template>
  <div class="footer">
    <hr>
    <div class="d-flex wrap justify-content-center footer-icons">
      <a href="https://www.instagram.com/komodikus12" class="istagram">
        <InstagramIcon class="icon-2x" fillColor="#FF0000"/>
      </a>
      <a href="https://www.linkedin.com/in/eugene-butko" class="linkedin">
        <LinkedinIcon class="icon-2x"/>
      </a>
      <a href="https://www.facebook.com/eugene.butko.3" class="facebook">
        <FacebookIcon class="icon-2x" />
      </a>
      <a href="mailto:marbel96@yandex.ru" class="email">
        <EmailIcon class="icon-2x" />
      </a>
      <a href="https://t.me/komodikus" class="telegram">
        <TelegramIcon class="icon-2x" />
      </a>
      <a href="https://github.com/komodikus" class="github">
        <GithubCircleIcon class="icon-2x"/>
      </a>
    </div>
    <div href="#" class="text-center my-end">
      developped by @komodikus
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
    name: 'footer-block',
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

