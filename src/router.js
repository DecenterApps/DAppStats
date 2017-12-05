import Vue from 'vue';
import VueRouter from 'vue-router';

import ContractEntry from './components/ContractEntry.vue';
import Stats from './components/Stats.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: ContractEntry },
    { path: '/stats', component: Stats },
  ]
});

export default router;
