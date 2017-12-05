import Vue from 'vue';
import Vuex from 'vuex';

import router from './router';

import { filter } from 'lodash';

Vue.use(Vuex);

const state = {
  test: '123',
  contract: {
    address: '',
    abi: {},
    network: 0,
  }
};

const store = new Vuex.Store({
  state,
  getters: {
    events: (state) => filter(state.contract.abi, e => e.type === 'event'),
    methods: (state) => filter(state.contract.abi, e => e.type === 'function'),
  },

  actions: {
    contractSetup (context, contract) {
      context.commit('contractSetup', contract);
      router.push('stats');
    },
  },

  mutations: {
    contractSetup (state, contract) {
      state.contract = contract;
    },
  }
});

export default store;
