<template>
  <div>
    <h3>Contract Info</h3>
    <div>
      <h4>Events</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Arguments</th>
        </tr>
        <tr v-for="event in contract.events">
          <td>{{ event.name }}</td>
          <td>
            <span class="argument" v-for="argument in event.inputs">
              {{ argument.name }} ({{ argument.type }}) <i>{{ argument.indexed ? 'indexed' : ''}}</i>
            </span>
          </td>
        </tr>
      </table>
    </div>

    <div>
      <h4>Methods</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Constant</th>
          <th>Payable</th>
          <th>State Mutability</th>
          <th>Inputs</th>
          <th>Outputs</th>
        </tr>
        <tr v-for="method in contract.methods">
          <td>{{ method.name }}</td>
          <td>{{ method.constant }}</td>
          <td>{{ method.payable }}</td>
          <td>{{ method.stateMutability }}</td>
          <td>
            <span class="argument" v-for="argument in method.inputs">
              {{ argument.name }} ({{ argument.type }})
            </span>
          </td>
          <td>
            <span class="argument" v-for="argument in method.outputs">
              {{ argument.name }} ({{ argument.type }})
            </span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => ({}),
    props: ['contract'],
    computed: {},
    methods: {},
  }
</script>
<style lang="scss">
  .argument {
    display: block;
    white-space: nowrap;
  }
</style>
