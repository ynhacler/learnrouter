<template>
  <div class="foo">
    <h1>{{ msg }}</h1>
    <div class="bb">User {{username}}</div>
    <router-view></router-view>
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
  width:500px;
  margin:0 auto;

}
.bb{
    background:green;
    color:grey;
}
.foo{
    background: greenyellow;
    margin: 5px auto;
    width: 600px;
    padding: 20px;
}
</style>
