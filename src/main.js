// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

import "../node_modules/jquery/dist/jquery.js"
import "../node_modules/bootstrap/js/bootstrap.min.js"
import "../node_modules/bootstrap/css/bootstrap.min.css"
import "../node_modules/bootstrap/js/bootstrap.min.js"
//导入bootstrap fileinput插件
import "../node_modules/bootstrap-fileinput/js/fileinput.js";
import "../node_modules/bootstrap-fileinput/js/fileinput.min.js";
import "../node_modules/bootstrap-fileinput/css/fileinput.min.css";
//import "../node_modules/bootstrap-fileinput/js/locales/zh.js";
import htmlToPdf from '../static/htmlToPdf/htmlToPdf.js';
//注册htmlToPdf接口
Vue.use(htmlToPdf)
import store from '../static/store/store.js'
//�?store定义为全局变量
Vue.prototype.$store=store
import router from './router/index';
import {setCookies,getCookies} from './utils/cookies.js'
import Loading from './components/loading/index.js'

Vue.use(Loading)
//import global_ from '../static/global.vue'//引用文件
//Vue.prototype.global= global_//挂载到Vue实例上面复制代码
//import "./assets/css/style.css"
Vue.config.productionTip = false
var axios = require('axios')
axios.defaults.baseURL = 'http://169.254.139.164:8080/university_cc'
Vue.prototype.$axios = axios
//路由拦截
router.beforeEach((to, name, next)=>{
  if(to.meta.requireAuth){
    if(store.state.login_state){
      next()
    }
    else{
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }else next()
}),
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  methods:{

  },
  beforeCreate(){
    var msg=JSON.parse(sessionStorage.getItem("userInfo"))
    if(msg==null){
      this.$store.dispatch("setlogin_flag",getCookies("login_flag"));
      if(this.$store.getters.getlogin_flag!=''){
        this.$store.dispatch("setid_card",getCookies("id_card"));
        this.$store.dispatch("setsno",getCookies("sno"));
        this.$store.dispatch("settno",getCookies("tno"));
        this.$store.dispatch("setusername",getCookies('name'));
        this.$store.dispatch("setLogin_state",true);
        this.login_state=true;
      }
      console.log("tno:"+this.$store.getters.gettno);
      console.log("sno:"+this.$store.getters.getsno);
      console.log("name:"+this.$store.getters.getusername);
      console.log("login_flag:"+this.$store.getters.getlogin_flag);
      console.log("loginstate:"+this.$store.getters.getLongin_state);
    }else{
      this.$store.dispatch("setLogin_state",true);
      this.$store.dispatch("setid_card",msg.id_card);
      this.$store.dispatch("setsno",msg.sno);
      this.$store.dispatch("settno",msg.tno);
      this.$store.dispatch("setusername",msg.name);
      this.login_state=true;
    }
  },
  //beforeCreate(){
  //  this.$store.dispatch("setid_card",getCookies("id_card"));
  //  this.$store.dispatch("setsno",getCookies("sno"));
  //  this.$store.dispatch("setusername",getCookies('name'));
  //  this.$store.dispatch("setlogin_flag",getCookies("login_flag"));
  //  this.$store.dispatch("setLogin_state",false);
  //  if(this.$store.getters.getlogin_flag!=''){
  //    this.$store.dispatch("setLogin_state",true);
  //  }
  //  console.log("sno:"+this.$store.getters.getsno);
  //  console.log("id_card:"+this.$store.getters.getid_card);
  //  console.log("name:"+this.$store.getters.getusername);
  //  console.log("login_flag:"+this.$store.getters.getlogin_flag);
  //  console.log("loginstate:"+this.$store.getters.getLongin_state);
  //},
  mounted(){

  }
})
