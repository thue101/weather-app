<template lang="html">
    <div class="">
        <h3>Please Login</h3>
        <form class="login" >
            <input type="text" placeholder="Enter username" class="input_fields" v-model="user.username">
            <input type="password" placeholder="Enter password" class="input_fields"v-model="user.pswd">
            <button class="btn btn-primary" @click="login" >Login</button> <br/>
            <p v-if="error">You have to log in before you can see the weather!</p>
        </form>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data:function(){
        return{
            user:{username:'',pswd:''}
        }
    },
    methods:{
        login(e){
            e.preventDefault()
            const user = this.user
            this.$store.dispatch('loginUser',user)
            this.$cookies.set('user',user)
        }
    },
    computed:{
        ...mapState(['loggedAs','error']),
        redirectIfLogged(){
            if(this.loggedAs){
                this.$router.push('homepage')
            }
        }
    },
    watch:{
        redirectIfLogged(){}
    }
}
</script>

<style scoped>
    .login{
        display: flex;
        flex-direction: column;
        align-items:center;
        padding:10px;
    }
    .input_fields{
      background-color: rgba(245, 239, 239, 0.4);
      color: black;
      padding: 14px 20px;
      margin: 18px 0;
      border: none;
      width: 60%;
      font-size: 16px;
    }
    .btn{
      padding: 10px;
        width :50%;
    }
</style>
