<template>
  <div>
    <h2>Stats</h2>
    <contract-info :contract="contract"></contract-info>
    <events-data :events-data="eventsData" :network="etherscanNetwork"></events-data>
  </div>
</template>
<script>
  import Vue from 'vue';
  import store from '../store';
  import router from '../router';
  import { mapGetters } from 'vuex'
  import { filter } from 'lodash';
  import ContractInfo from './ContractInfo.vue'
  import EventsData from './EventsData.vue'
  import ethereumService from '../ethereum-service';

  export default {
    data: () => ({
      eventsData: {}
    }),
    computed: {
      contract: () => ({
          ...store.state.contract,
          events: store.getters.events,
          methods: store.getters.methods,
      }),
      etherscanNetwork: () => ethereumService.etherscanNetworks[store.state.contract.network] || 'mainnet',
    },
    methods: {

    },
    created () {
      if (this.contract.address === '') {
        router.push('/');
        return;
      }
      ethereumService.init(this.contract.network);
      this.contract.events.forEach(event => {
        ethereumService.getEvents(this.contract, event.name)
          .then(events => {
            Promise.all(events.map(ethereumService.parseEvent))
              .then(parserEvents => {
                Vue.set(this.eventsData, event.name, parserEvents);
              });
          })
      });
    },
    components: {
      'contract-info': ContractInfo,
      'events-data': EventsData,
    },
  }
</script>
<style lang="scss">
  #general {
    color: orange;
  }
</style>
