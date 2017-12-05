<template>
  <div class="container">
    <h1>DAapp Stats</h1>
    <div id="nav">
      <!--<router-link to="/">General</router-link>-->

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {  }
</script>

<style lang="scss">
  body, input, button, select {
    color: #333;
    font-family: 'PT Serif', serif;
  }
  h1 {
    font-family: 'PT Serif', serif;
    color: #a73427;
  }
  .container {
    max-width: 1200px;
    margin: auto;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  td, th {
    text-align: left;
    border: 1px solid #eee;
    padding: 10px;
  }
  td.empty {
    opacity: .4;
  }
</style>
