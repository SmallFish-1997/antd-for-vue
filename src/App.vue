<template>
  <div id="app">
      <img alt="Vue logo" src="./assets/logo.png" />
    <a-locale-provider :locale="getLocaleLang">
      <HelloWorld />
    </a-locale-provider>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import {mapGetters} from 'vuex';
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import en_US from "ant-design-vue/lib/locale-provider/en_US";
export default {
  name: "app",
  data() {
    return {
      locale: en_US
    };
  },
  computed:{
    ...mapGetters(['getLanguage']),
    getLocaleLang(){
      let Language = null;
      switch(this.getLanguage){
        case 'en_US':
          Language = en_US;
          break;
        default:
          Language = zh_CN;
      }

      return Language;
    }
  },
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
