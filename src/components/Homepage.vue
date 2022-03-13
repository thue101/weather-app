<template lang="html">
    <div class="">
        <h3>Welcome to the Weather Application.</h3>
        <p>You're logged as <b>{{loggedAs}}</b></p>    
        <div class="buttons">
            <button class="btn btn-primary" @click="goToPage">Go to {{loggedAs}} Page</button>
            <button class="btn btn-danger" @click=goToProhibitedPage>Visit {{loggedAs==='client' ? 'Admin' : 'Client'}} Page </button>
        </div>
        
    </div>
    
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['loggedAs'])
    },
    methods:{
        goToPage(){
            const goToPage= this.loggedAs === 'client' ? 'ClientView'
             : this.loggedAs === 'admin' ? 'AdminView'
             :''
            this.$router.push(goToPage)
        },
        goToProhibitedPage(){
            const goToProhibitedPage= this.loggedAs === 'client' ? 'AdminView'
             : this.loggedAs === 'admin' ? 'ClientView'
             :''
            this.$router.push(goToProhibitedPage)
        }
    }
}
</script>

<style scoped>
    .buttons{
        
    }
    button{
        margin-right: 10px;
    }
</style>
