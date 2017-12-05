<template>
  <div>
    <h3>EventsData</h3>
    <div v-for="(eventData, eventName) in eventsData">
      <h4>{{ eventName }}</h4>
      <table>
        <tr>
          <th>Time</th>
          <th>Etherscan</th>
          <th>Arguments</th>
        </tr>
        <tbody v-for="event in eventData">
          <tr>
            <td>{{ event.time.toLocaleString() }}</td>
            <td>
              <a
                target="_blank" rel="noopener noreferrer"
                :href="'https://' + network + '.etherscan.io/tx/' + event.transactionHash">
                Etherscan
              </a>
            </td>
            <td>
              <span class="argument" v-for="(value, name) in event.args">
                <b>{{ name }}:</b> {{ value }}
              </span>
            </td>
          </tr>
          <!--<tr>-->
            <!--<td colspan="10">{{ event }}</td>-->
          <!--</tr>-->
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({}),
    props: ['eventsData', 'network'],
    computed: {},
    methods: {},
  }
</script>

<style lang="scss">
  .argument {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    max-width: 800px;
  }
   td:hover .argument {
    max-width: none;
  }

</style>
