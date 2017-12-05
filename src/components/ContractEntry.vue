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
      address: '0xc6d9d30a49c7a3fb7759a0bab91344408497d556',
      abi: '[{"constant":false,"inputs":[{"name":"usernameHash","type":"bytes32"},{"name":"fileHash","type":"string"}],"name":"updateContacts","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"usernameHash","type":"bytes32"},{"name":"encryptedUsername","type":"string"},{"name":"publicKey","type":"string"}],"name":"registerUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipients","type":"address[]"},{"name":"mailHash","type":"string"},{"name":"threadHash","type":"string"},{"name":"threadId","type":"bytes32"}],"name":"sendEmail","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"externalContractAddress","type":"address"},{"name":"recipients","type":"address[]"},{"name":"mailHash","type":"string"},{"name":"threadHash","type":"string"},{"name":"threadId","type":"bytes32"}],"name":"sendExternalEmail","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"usernameHash","type":"bytes32"},{"indexed":true,"name":"addr","type":"address"},{"indexed":false,"name":"encryptedUsername","type":"string"},{"indexed":false,"name":"publicKey","type":"string"}],"name":"UserRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"mailHash","type":"string"},{"indexed":false,"name":"threadHash","type":"string"},{"indexed":true,"name":"threadId","type":"bytes32"}],"name":"EmailSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"usernameHash","type":"bytes32"},{"indexed":false,"name":"fileHash","type":"string"}],"name":"ContactsUpdated","type":"event"}]',
      network: 42,
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
