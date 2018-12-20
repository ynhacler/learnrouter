<template>
  <div id="app">
    <router-link to="/">Hello</router-link>
    <router-link to="/foo/zzh/profile/3lzzh">Foo1</router-link>
    <router-link to="/foo/zhang/posts">Foo2</router-link>
    <router-link to="/bar/dddd">Bar</router-link>
    <router-link :to="{name:'Bar',params: { userId: 123 }}">Bar2</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    gogo:function(){
      console.log(123);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: gray;
}
</style>
