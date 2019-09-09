<template>
  <div>
    <div class="container-fluid">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 top1">
            <div class="top_title">
              <h3>作业查重系统后台管理系统</h3>
            </div>
        </div>
      <div style="margin-top: 60px">
        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 left_nav">
          <div class="left_nav_child">
            <ul class="nav nav-pills nav-stacked">
              <li role="presentation" class="active"><a href="#">主页</a></li>
              <li role="presentation"><a href="#">文章管理</a></li>
              <li role="presentation"><a href="#">角色</a></li>
              <li role="presentation"><a href="#">修改密码</a></li>
              <li role="presentation"><a href="#">关于系统</a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
          <msg></msg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import msg from './mannager_child/msg.vue'
  export default{
    name:'mannager',
    components:{
      msg,
    },
    data(){
      return{

      }
    },
  methods:{

  },
  mounted(){

  }
  }
</script>
<style scoped>
  .top1{
    height: 60px;
    position: fixed;
    top:0;
    z-index: 20;
    background-color: #006666;
  }
  .container-fluid{
    margin-left: -15px;
  }
  .top_title{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .top_title h3{
    color: white;
  }
  .left_nav{
    width: 150px;
    background-color:  #DDDDDD;
    height:890px;
  }
  .active{
    background-color:#006666;
  }
  .left_nav_child{
    padding-top: 20px;
    height: 300px;
  }
</style>
