import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        keepAlivePages:[],
		title: sessionStorage.getItem('title'),
    },
    mutations: {
        setTitle(state, value) {
            document.title = value;
            sessionStorage.setItem('title', value);
            state.title = value;
        },
        setKeepPages(state, value) {
            state.keepAlivePages = value;
        }

    },
    actions: {


    }
})