<template>
  <div>
    <h2>Contract Info</h2>
    <div id="contract-info">
      <div>
        <label for="address-input">Contract address</label>
        <input type="text" id="address-input" v-model="address">
      </div>
      <div>
        <label for="abi-input">Contract ABI</label>
        <input type="text" id="abi-input" v-model="abi">
      </div>
      <div>
        <label for="network-input">Contract Network</label>
        <select v-model="network" id="network-input">
          <option value="1">Main</option>
          <option value="3">Ropsten</option>
          <option value="42">Kovan</option>
        </select>
      </div>
      <div>
        <button v-on:click="submit">Analyze</button>
      </div>
      <div>{{ error }}</div>
    </div>
  </div>
</template>

<script>
  import store from '../store';

  export default {
    data: () => ({
      address: '',
      abi: '',
      network: 1,
      error: '',
    }),
    computed: {},
    methods: {
      submit() {
        try {
          if (this.address.length !== 42 && this.address.substr(0, 2) !== '0x')
            throw "Invalid contract address";

          const contract = {
            address: this.address,
            network: this.network * 1,
            abi: JSON.parse(this.abi),
          };

          store.dispatch('contractSetup', contract)
        } catch (e) {
          console.log(e);
          this.error = e.toString();
        }
      }
    }
  }
</script>

<style lang="scss">
  #contract-info {
    input, select {
      display: block;
      width: 300px;
      padding: 5px;
      margin: 5px 0 10px;
    }
  }
</style>
