import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
     plugins: [createPersistedState()],
    state:{
        usersDb:[
            {username:'client',password:'client'},
            {username:'admin',password:'admin'}
        ],
        loggedAs:'',
        error:false,
    },
    getters:{
        userJustLogged:state=>{
            return state.loggedAs
        },
        getMaliciousAttempt:state=>{
            return state.attemptMalicious
        }
    },
    mutations:{
        LOGIN_USER:(state,payload)=>{
            
            const user = payload.username || payload
            let checkUser= state.usersDb.find(username=>{
                return username.username===user
            })
            if(checkUser){
                return state.loggedAs=checkUser.username
            }
        },
        LOGOUT_USER:(state)=>{
            state.loggedAs=''
        },
        SHOW_ERROR_MESSAGE:(state)=>{
            state.error=true;
        },
        HIDE_ERROR_MESSAGE:(state)=>{
            state.error=false;
        },
        
    },
    actions:{
        loginUser:(context,response)=>{
            context.commit('LOGIN_USER',response)
        },
        showErrorMessage:(context)=>{
            context.commit('SHOW_ERROR_MESSAGE')
        },
        hideErrorMessage:(context)=>{
            context.commit('HIDE_ERROR_MESSAGE')
        },
        logoutUser:(context,dispatch)=>{
            context.commit('LOGOUT_USER')
            context.dispatch('hideErrorMessage')
        }
        
    }
})