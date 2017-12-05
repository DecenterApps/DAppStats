import Vue from 'vue';
import Layout from './Layout.vue';
import store from './store';
import router from './router';

const app = new Vue({
  ...Layout,
  router,
  store,
});

export { app, router, store };
