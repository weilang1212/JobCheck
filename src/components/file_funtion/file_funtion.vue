<template>
  <div>
    <div class="top" id="app">
      <div class="modal fade bs-example-modal-sm" id="title_text" tabindex="-1" role="dialog"aria-labelledby="mySmallModalLabel">
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal"
                      aria-hidden="true">×
              </button>
              <h4 class="modal-title">
                提示
              </h4>
            </div>
            <div class="modal-body">
              请输入标题或者文章内容
            </div>
          </div>
        </div>
        </div>
      <div class="top3">
        <div class="container">
          <nav class="navbar navbar-default nav_background" role="navigation">
            <div class="collapse navbar-collapse"><!--折叠包裹设置top1固定宽度起来防止导航折叠，需要按钮来实现折叠，详情看api-->
              <ul class="nav navbar-nav">
                <li><img id="imgid" src="../home/logo.png" class="imglogo"></li>
                <li><a  href="#">首页</a></li>
                <li><a  href="#">作业查重</a></li>
                <li><a href="#">查看报告</a></li>
                <li><a href="#">关于查重</a></li>
              </ul>
              <div class="nav navbar-nav navbar-right">
                <li @click="user"><img src="./user.jpg"></li>
                <div v-if="show_userzx" class="user_button" id="user_button">
                  <button type="button" class="btn button-primary btn-xs btn-block">{{name}}</button>
                  <button type="button" @click="login_out" class="btn btn-danger btn-xs btn-block">退出登录</button></div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="container margin">
      <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
        <ul class="nav nav-tabs">
          <li role="presentation" :class="[actions=='copyText'?'active':'']"><a href="#" @click="copyText">粘贴文本提交</a></li>
          <li role="presentation" :class="[actions=='upload'?'active':'']"><a href="#" @click="upload">上传文件提交</a></li>
          <li role="presentation" :class="[actions=='viewReports'?'active':'']"><a href="#" @click="viewReports">查看报告</a></li>
        </ul>
        <div style="margin-bottom: 60px">
          <componen :is="componen"></componen>
        </div>
      </div>
      <!--<div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">-->
            <!--<div class="right_vue">-->
              <!--<div class="tips">-->
                <!--<h5 class="glyphicon glyphicon-alert">温馨提示</h5>-->
                <!--<p>系统支持中英语种的论文检测</p><br>-->
                <!--<p>系统在检测时会分析文章的前后文关系，所以请您提交文章的全部内容，如果是非全文的检测将不能保证检测的准确性。</p><br>-->
                <!--<p>被系统自动识别出来的非正文部分（如目录，标题，公式，图表等）不参与检测，检测字数一般略小于文章字数。</p>-->
              <!--</div>-->
            <!--</div>-->
      <!--</div>-->
    </div>
    <div class="container-fluid  buttom">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
          <h5>university_cc查重系统技术由11舍510提供技术支持</h5>
      </div>
    </div>

  </div>
</template>
<script>
  import copyText from './file_child/copyText.vue'
  import viewReports from './file_child/viewReports.vue'
  import upload from './file_child/upload.vue'
  export default {
    name: 'file_funtion',
    components: {
      //"word":word
      //"login":login,
      copyText,
      viewReports,
      upload
    },
    data()
  {
    return {
      name: '张三',
      show_userzx: false,
      actions:'copyText',//标志组件导航的点击样式选择
      componen:'copyText',

    }
  },
  methods:{
    user()
    {
      this.show_userzx = !this.show_userzx;
    },
    scroll()
    {
      var that=this
      $(window).scroll(function () {
        var scrollpos = $(this).scrollTop();//$(this)意思为将dom对象转换为jquery对象，这样就可以使用jquery提供的方法操作
        if (scrollpos != 0) {
          that.show_userzx = false;
        }
      })
    },
    login_out(){

    },
    copyText(){
      var that=this;
      that.actions='copyText';
      this.componen='copyText';
    },
    upload(){
      var that=this;
      that.actions='upload';
      this.componen='upload';
    },
    viewReports(){
      var that=this;
      that.actions='viewReports';
      this.componen='viewReports';
    }
  },
  mounted()
  {
    this.scroll();
  }
  }
</script>
<style scoped>

  .navbar-nav li a{
    color:white;
  }
  .nav_background{
    background-color: transparent;
    border: 0;
  }
  .top{
    height:60px;
  }
  .top3{
    height: 60px;
    position: fixed;
    top:0;
    width: 2000px;
    z-index: 20;
    background-color: #006666;
    transition-duration:1.3s;
  }
  .imglogo{
    margin-top: 15px;
    width: 100px;
    height: 30px;
  }
  .navbar-right{
    margin-top: 10px;
    display: flex;
    width: 270px;
    flex-direction: row;
  }
  .user_button{
    display: flex;
    border-radius: 8px;
    flex-direction: column;
    align-items: center;
    width: 150px;
    height: 80px;
    margin-top:3px;
    margin-left: 10px;
    border: 0.5px solid #DDDDDD;
    background-color: white;
    animation: user_bu 0.2s;
    justify-content: center;
  }
  @keyframes user_bu {
    from{width:0}
    to{width:150px}
  }
  .navbar-right li{
    margin-left:80px;
    cursor:pointer;
  }
  .navbar-right img{
    width: 46px;
    height: 46px;
    border-radius:23px ;
  }
  .margin{
    margin-top: 30px;
    z-index: 1;
  }
  .nav-tabs a{
    font-size: 12px;
  }
  .buttom{
    position: fixed;
    bottom:0;
    height: 40px;
    width: 100%;
    background-color: #006666;;
  }
  .buttom div{
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 5px;
    justify-content: center;
  }
  .buttom h5{
    color: white;
  }
</style>
