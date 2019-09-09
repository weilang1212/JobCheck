<template>
  <div>
    <login_top v-on:show_pword="show_pword"></login_top>
    <forget_pword v-if="show" v-on:show_pword="show_pword"></forget_pword>
  </div>
</template>
<script>
  //import store from '../../../static/store/store.js'
  import login_top from './login_top.vue'
  import forget_pword from './forget_pword.vue'
  export default {
    name:'login',
    data(){
    return{
      show:false
    }
  },
  methods:{
    show_pword(value)
    {
      this.show = !this.show;
    }
  },
  components:{
    'login_top':login_top,
    'forget_pword':forget_pword,
  },
  mounted:function(){
    //console.log(this.$store.state.login_state);
  }
  }
</script>
