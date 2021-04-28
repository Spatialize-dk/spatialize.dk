import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueScrollTo from 'vue-scrollto';
import VueGtag from 'vue-gtag';

import '@/styles/spatialize.scss';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(VueGtag, {
  config: { id: 'G-F977L1Z0F8' },
  appName: 'Spatialize',
  pageTrackerScreenviewEnabled: true
});

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
