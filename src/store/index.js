import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        language: 'zh_CN'
    },
    getters: {
        getLanguage: state => state.language
    },
    mutations: {
        changeLanguage(state, lang) {
            console.log(lang);
            
            state.language = lang;
        }
    }
})