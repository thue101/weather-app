<template lang="html">
    <div class="main_container">
        <h2>Weather App 1.0 </h2>
        <button class="btn btn-primary logout" @click="logOut" v-if="userLogged">Logout</button>
    </div>
</template>

<script>
export default {
    methods:{
        logOut(){
            this.$store.dispatch('logoutUser')
            this.$router.push('login')  
            this.$cookies.remove('user')
        }
    },
    computed:{
        userLogged(){
            return this.$store.getters.userJustLogged
        }
    }
}
</script>

<style scoped>
    .main_container{
        background-color: #85a5de;
      /*minimum height: 80*/
        min-height: 80%;
        margin-bottom:25px;
        position:relative;
    }
    .main_container h2{
        color:rgb(244, 238, 235);
        padding:10px;
    }
    .logout{
        /*position:absolute;*/
        /*top:1rem;*/
        /*left:60rem;*/
      line-height: 12px;
      width: 8%;
      font-size: 15pt;
      margin-top: 18px;
      margin-right: 25px;
      position:absolute;
      top:0;
      right:0;
    }
</style>
