import Vue from 'vue'
import App from './App.vue'
import 'vue-material-design-icons/styles.css';
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'
import VueScrollReveal from 'vue-scroll-reveal';


Vue.config.productionTip = false
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 900,
  scale: 1,
  distance: '10px',
  mobile: true
});

new Vue({
  render: h => h(App),
}).$mount('#app')
