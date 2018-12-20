<template>
  <div class="bar">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Bar',
  data () {
    return {
      msg: 'Bar2222222222222222222'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  background: blue;
  color: white;
}
</style>
