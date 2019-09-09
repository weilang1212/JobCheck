<template>
  <!--<img src="./assets/logo.png">-->
  <div>
    <!--<router-view></router-view>-->
    <!--<uqdate_pword></uqdate_pword>-->
    <!--<main_function></main_function>-->
    <!--<home></home>-->
  <!--<login></login>-->
    <router-view></router-view>
   <!---->
  </div>
  <!--<router-view/>-->
</template>
<script>
  //import login from './components/login/login';
  import home from './components/home/home.vue';
  //import uqdate_pword from './components/login/update_pword.vue'
  import main_function from './components/main_function/main_fun.vue'
  //import word from './components/HelloWorld'
  import file_funtion from './components/file_funtion/file_funtion.vue'
  import mannager from './components/mannager/mannager.vue'
  import update_password from './components/login/update_pword.vue'
  export default {
    name: 'App',
    data()
  {
    return {
      show_home:'',
    }
  }
  ,
  components: {
    //"word":word
    //"login":login,
    "home":home,
    //"uqdate_pword":uqdate_pword
    "main_function":main_function,
      file_funtion,
      mannager,update_password
  }
  ,
  methods:{
    show_pword(value)
    {
      this.show = !this.show;
    }
  }
  ,
  mounted: function () {
    //this.show_p();
    //this.background_image();
  },
  //创建钩子函数加载首页路由
  created: function () {

  }
  }
</script>
<style>
  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  /*}*/
</style>
