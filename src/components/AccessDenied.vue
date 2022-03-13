<template lang="html">
    <div class="main_container">
        <h3>Access Denied, you don't have permission to access here</h3>

        <img id="img" src="../assets/denied.jpg" alt="permissionDenied">
      <button class="btn btn-primary" @click="backToHome"> Go Back</button>
    </div>
</template>

<script>

export default {
    methods:{
        backToHome(){
            this.$router.push('homepage')
        }
    }
}
</script>

<style scoped>
    .btn{
        width:50%;
    }
    #img{
        width:650px;
    }
    .main_container{
    
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items:center;
    }
</style>
