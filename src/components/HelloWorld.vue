<template>
  <div class="hello">
    <h1>{{ $t('title') }}</h1>
    <h2>{{ getLanguage }}</h2>
    <a-radio-group :defaultValue="null" @change="changeLocale">

      <a-radio-button v-for="(item,index) in LanguageList" :key="index" :value="item.key">{{item.name}}</a-radio-button>
    </a-radio-group>
    <a-button type="primary">Primary</a-button>
    <a-date-picker @change="onChange" />
  </div>
</template>

<script>
import { mapGetters,mapMutations  } from 'vuex'
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data(){
    return {
      LanguageList:[
        {
        key:'zh_CN',
        name:'简体中文'
        },
        {
        key:'en_US',
        name:'English'
        }
      ]
    }
  },
  created(){
    console.log(this);
    
  },
  computed:{
    ...mapGetters([
      'getLanguage'
    ]),
   
  },
  methods: {
    ...mapMutations(['changeLanguage']),
    onChange(date) {
      console.log(date);
    },
     changeLocale(e) {
      const localeValue = e.target.value;
      this.changeLanguage(localeValue);
      this.$i18n.locale = localeValue;

      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
