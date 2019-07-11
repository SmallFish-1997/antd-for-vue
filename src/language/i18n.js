import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zh_CN from './zh_CN';
import en_US from './en_US';
import store from '../store';

Vue.use(VueI18n);

const LANG = store.getters.getLanguage;

export default new VueI18n({
    locale: LANG, 
    messages:{
        zh_CN,
        en_US   
    }
})