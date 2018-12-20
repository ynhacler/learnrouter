<template>
  <div class="foo">
    <h1>{{ msg }}</h1>
    <div>User {{username}}</div>
  </div>
</template>

<script>
export default {
  name: 'Foo',
  data () {
    return {
      msg: 'Foo11111111111'
    }
  },
  computed:{
    username(){
      return this.$route.params.id
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  background: black;
  color: white;
}
</style>
