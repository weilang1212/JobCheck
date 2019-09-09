import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/login'
import main_fun from "../components/main_function/main_fun"
import home from "../components/home/home"
import update_pword from "../components/login/update_pword"
import loading from "../components/loading/loading"
import file_funtion from "../components/file_funtion/file_funtion"
import mannager from "../components/mannager/mannager"
Vue.config.productionTip=false
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },{
      path: '/main_fun',
      name: 'main',
      component: main_fun
    },{
      path: '/',
      component: home
    },{
      path: '/update_pword',
      name: 'update_pword',
      component: update_pword
    },{
      path: '/loading',
      name: 'loading',
      component: loading
    },{
      path: '/file_funtion',
      name: 'file_funtion',
      component: file_funtion,
      meta: {
        requireAuth: true
      }
    }, {
      path: '/mannager',
      name: 'mannager',
      component: mannager
    },
    {
      path: '/mannager',
      name: 'mannager',
      component: mannager
    }
  ],
  //每次跳转页面从顶部开始显示
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
  }
})
