import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';

/* eslint-disable no-unused-vars */

Vue.use(VueResource);

console.log('test');

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
});
