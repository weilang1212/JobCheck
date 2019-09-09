import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store=new Vuex.Store({
  state:{
    login_state:false,//展示是否为一天内登陆状态
    login_flag:'',//登陆存进cookies
    password:'',
    username:'',
    sno:'',
    tno:'',
    id_card:''
  },
  getters:{
    getLongin_state(state){
      return state.login_state;
    },
    getlogin_flag(state){
      return state.login_flag;
    },
    getpassword(state){
      return state.password;
    },
    getusername(state){
      return state.username;
    },
    getsno(state){
      return state.sno;
    },
    gettno(state){
      return state.tno;
    },
    getid_card(state){
      return state.id_card
    }
  },
  actions:{
    // 参数列表：{commit, state}
    // state指的是state数据
    // commit调用mutations的方法
    // name就是调用此方法时要传的参数
    //{commit,state}固定用法
    setLogin_state({commit,state}, name){
      // 跟后台打交道
      // 调用mutaions里面的方法
      commit("setLogin_state", name);
      },
    setlogin_flag({commit,state}, name){
      commit("setlogin_flag", name);
    },
    setusername({commit,state},name){
      commit("setusername",name)
    },
    setpassword({commit,state},name){
      commit("setpassword",name)
    },
    setsno({commit,state},name){
      commit("setsno",name)
    },
    settno({commit,state},name){
      commit("settno",name)
    },
    setid_card({commit,state},name){
      commit("setid_card",name)
    }
    },
  mutations:{
    // state指的是state的数据固定用法
    // name传递过来的数据
    setLogin_state(state,name){
      state.login_state=name;
    },
    setlogin_flag(state,name){
      state.login_flag=name;
    },
    setpassword(state,name){
      state.password=name;
    },
    setusername(state,name){
      state.username=name;
    },
    setsno(state,name){
      state.sno = name;
    },
    settno(state,name){
      state.tno=name;
    },
    setid_card(state,name){
      state.id_card=name
    }
  }
})
export default store;
/*mutations和actions的区别
  1、流程顺序“相应视图—>修改State”拆分成两部分，视图触发Action，Action再触发Mutation。
  2、角色定位基于流程顺序，二者扮演不同的角色。Mutation：专注于修改State，理论上是修改State的唯一途径。Action：业务代码、异步请求。
  3、限制角色不同，二者有不同的限制。Mutation：必须同步执行。Action：可以异步，但不能直接操作State。
*/
