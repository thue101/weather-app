<template>
  <div id="app">
      <nav-bar/>
      <router-view name="login"> </router-view>
      <router-view name="homepage"> </router-view>
      <router-view name="clientView"></router-view>
      <router-view name="adminView"></router-view>
      <router-view name="accessDenied"></router-view>
  </div>
</template>

<script>

import Login from './components/Login'
import NavBar from './components/NavBar.vue'
export default {
  name: 'app',
  components: {
    // eslint-disable-next-line vue/no-unused-components
      Login,
      NavBar
  },
    created(){
        if(!this.$cookies.get('user')){
            return
        }
        const usercookies = this.$cookies.get('user').username || null
        
        if(usercookies){
            this.$store.dispatch('loginUser',usercookies)
        }
    }
}
</script>

<style>
#app {
   font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}

</style>
