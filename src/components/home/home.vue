<template>
  <div>
    <div>
      <div class="modal fade bs-example-modal-sm" id="home_logout" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
           aria-hidden="true">
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal"
                      aria-hidden="true">×
              </button>
              <h4 class="modal-title" id="myModalLabel">
                提示
              </h4>
            </div>
            <div class="modal-body">
              退出成功
            </div>
            <div  class="modal-footer">
              <button type="button" v-on:click="go_login" class="btn btn-primary">去登陆</button>
            </div>
            <!--<div class="modal-footer">-->
            <!--<button type="button" class="btn btn-default"-->
            <!--data-dismiss="modal">关闭-->
            <!--</button>-->
            <!--</div>-->
          </div>
        </div>
      </div>
    </div>

    <div class="top" id="app">
      <div class="top1">
        <div class="container">
          <nav class="navbar navbar-default nav_background" role="navigation">
            <div class="collapse navbar-collapse"><!--折叠包裹设置top1固定宽度起来防止导航折叠，需要按钮来实现折叠，详情看api-->
              <ul class="nav navbar-nav">
                <li><img id="imgid" src="./logo1.png" class="imglogo"></li>
                <li><a href="#">首页</a></li>
                <li><a href="#">作业查重</a></li>
                <li><a href="#">在线改重</a></li>
                <li><a href="#">机器改重</a></li>
                <li><a href="#">关于查重</a></li>
              </ul>
              <div v-if="login_state==false">
                <ul class="nav navbar-nav navbar-right">
                  <li @click="login"><span class="glyphicon glyphicon-log-in"></span> 登录</li>
                </ul>
              </div>
              <div v-else class="nav navbar-nav navbar-right">
                <li @click="user"><span class="glyphicon glyphicon-user"></span>&nbsp&nbsp{{name}}</li>
                <div v-if="show_userzx" class="user_button" id="user_button">
                  <button type="button" @click="update_pword" class="btn button-primary btn-xs btn-block">修改密码</button>
                  <button v-if="tno!=''" type="button" @click="mannager" class="btn btn-info btn-xs btn-block">管理员</button>
                  <button type="button" @click="login_out" class="btn btn-danger btn-xs btn-block">退出登录</button></div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div class="md">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="./image/computer.png">
            <!--<div class="carousel">-->
              <!--<div id="myCarousel" class="carousel slide" data-ride="carousel">-->
                <!--&lt;!&ndash; 轮播（Carousel）指标 &ndash;&gt;-->
                <!--<ol class="carousel-indicators">-->
                  <!--<li data-target="#myCarousel" data-slide-to="0" class="active"></li>-->
                  <!--<li data-target="#myCarousel" data-slide-to="1"></li>-->
                  <!--<li data-target="#myCarousel" data-slide-to="2"></li>-->
                <!--</ol>-->
                <!--&lt;!&ndash; 轮播（Carousel）项目 &ndash;&gt;-->
                <!--<div class="carousel-inner">-->
                  <!--<div class="item active">-->
                    <!--<img src="./image/timg1.jpg" alt="First slide">-->
                  <!--</div>-->
                  <!--<div class="item">-->
                    <!--<img src="./image/timg2.jpg" alt="Second slide">-->
                  <!--</div>-->
                  <!--<div class="item">-->
                    <!--<img src="./image/timg3.jpg" alt="Third slide">-->
                  <!--</div>-->
                <!--</div>-->
                <!--&lt;!&ndash; 轮播（Carousel）导航 &ndash;&gt;-->
                <!--<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">-->
                  <!--<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>-->
                  <!--<span class="sr-only">Previous</span>-->
                <!--</a>-->
                <!--<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">-->
                  <!--<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>-->
                  <!--<span class="sr-only">Next</span>-->
                <!--</a>-->
              <!--</div>-->
            <!--</div>-->
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="col-right">
              <div>
                <h3>作业查重报告</h3>
              </div>
              <div><h4>速度快，查重准确，最优结果的查重报告</h4></div>
              <div class="btn-group btn-group-justified">
                <div class="btn-group">
                  <button type="button" @click="stu_login" class="btn btn-primary">学生</button>
                </div>
                <div class="btn-group">
                  <button type="button" @click="tno_login" class="btn btn-primary">教师</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="process">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 process_child">
            <div>
              <h3>作业检测流程</h3>
              <h5>PAPER TEST PRRCESS</h5>
              <h5>只需简单4步，快速得到作业提交结果</h5>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 col-lg-3 col-sm-6 col-xs-6 all">
            <div class="all_step">
              <img src="./image/login.png">
              <h5>step1</h5>
              <h4>登录注册</h4>
            </div>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-6 col-xs-6 all">
            <div class="all_step">
              <img src="./image/tijiao.png">
              <h5>step2</h5>
              <h4>提交作业</h4>
            </div>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-6 col-xs-6 all">
            <div class="all_step">
              <img src="./image/jiance.png">
              <h5>step3</h5>
              <h4>立即检测</h4>
            </div>
          </div>
          <div class="col-md-3 col-lg-3 col-sm-6 col-xs-6 all">
            <div class="all_step">
              <img src="./image/baogao.png">
              <h5>step4</h5>
              <h4>查看报告</h4>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 text_botton">
            <button type="button" class="btn btn-primary btn-lg btn-block">开始检测</button>
          </div>
        </div>
      </div>
    </div>
    <div class="product">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12 product_child">
            <div class="product_title">
              <h3>产品特点</h3>
              <h6>Product Features</h6>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6">
            <div class="product_child1">
              <h4>智能检测对比</h4>

              <p>格子达采用强大的智能语义识别技术能够快速的命中并识别出检测文件与比对源中的相似内容，系统的检测速度、检测精度、检测全面性已达行业顶级，与学校采用的主流论文检测系统算法技术处于同一水平</p>
            </div>
            <div class="product_child1">
              <h4>对比学生资源库</h4>

              <p>格子达采用强大的智能语义识别技术，能够快速的命中并识别出检测文件与比对源中的相似内容，系统的检测速度、检测精度、检测全面性已达行业顶级，与学校采用的主流论文检测系统算法技术处于同一水平</p>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6">
            <div class="contain">
              <div class="product_childmd">
                <img src="./image/roate-bg.png">
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-4 col-sm-6 col-xs-6">
            <div class="product_child2">
              <h4>检测安全</h4>

              <p>格子达采用强大的智能语义识别技术，能够快速的命中并识别出检测文件与比对源中的相似内容，系统的检测速度、检测精度、检测全面性已达行业顶级，与学校采用的主流论文检测系统算法技术处于同一水平</p>
            </div>
            <div class="product_child2">
              <h4>高质量检测</h4>

              <p>格子达采用强大的智能语义识别技术、能够快速的命中并识别出检测文件与比对源中的相似内容，系统的检测速度、检测精度、检测全面性已达行业顶级，与学校采用的主流论文检测系统算法技术处于同一水平</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {setCookies,getCookies} from '../../utils/cookies.js'

  export default {
    name:'home',
    data(){
    return {
      show_userzx:false,
      login_state:false,
      name:'',
      tno:'',
      sno:'',
    }
  },
  methods:{
    user()
    {
      this.show_userzx = !this.show_userzx;
    },
    mannager(){
      this.$router.push({path:'/mannager'})
    },
    login(){
      //window.open("../login/login.html")
//      console.log(this.$router.push)
      this.$router.push({path:'/login'})
    },
    tno_login(){
      if(this.tno==''){
        this.$router.push({path:'/login'})
      }
      else{
        this.$router.push({path:'/mannager'})
      }
    },
    stu_login(){
      if(this.sno!=''||this.tno!='')this.$router.push({path:'/file_funtion'});
      else this.$router.push({path:'/file_funtion'});
    },
    //监听滚动条位置
    scroll(){
      var that=this;
      var logo = require('./logo.png');
      var logo1 = require('./logo1.png');
      $(window).scroll(function () {
        var obj = document.getElementById("imgid")
        var scrollpos = $(this).scrollTop();//$(this)意思为将dom对象转换为jquery对象，这样就可以使用jquery提供的方法操作
        if (scrollpos != 0) {
          that.show_userzx=false;
          $(".top1").css({
            "background-color": 'white'//jquery.js中css方法$("p").css({"background-color":"yellow","font-size":"200%"});
          })
          obj.src = logo1//设置src路径
          obj.classList = 'imglogo on'//设置类名
        }
        else {
          $(".top1").css({
            "background-color": "transparent"
          })
          obj.src = logo//设置src路径
          obj.classList = 'imglogo'//设置类名
        }
      })
    },
    //修改密码
    update_pword(){
      this.$router.push({path:"/update_pword"});
    },
    //退出登录
    login_out(){
      sessionStorage.clear();
      setCookies("id_card","",-1)
      setCookies("name","",-1)
      setCookies("sno","",-1)
      setCookies("username", "", -1);
      setCookies("login_flag","",-1);
      setCookies("tno","",-1);
      this.$store.dispatch("setid_card",getCookies("id_card"));
      this.$store.dispatch("setsno",getCookies("sno"));
      this.$store.dispatch("settno",getCookies("tno"));
      this.$store.dispatch("setusername",getCookies('name'));
      this.$store.dispatch("setlogin_flag",getCookies("login_flag"));
      this.$store.dispatch("setLogin_state",false);
      this.login_state=false;
      $("#home_logout").modal("show")
    },
    go_login(){
      $("#home_logout").modal("hide")
      this.$router.push({path:'/login'});
    },
  },
  beforeCreate(){
    //返回主页自动关闭modal弹框
    $("#myModal").modal("hide");
    $("#forget_myModal").modal("hide");
    $("#update_success").modal("hide");
//      var msg=JSON.parse(sessionStorage.getItem("userInfo"))
//      if(msg==null){
//        this.$store.dispatch("setlogin_flag",getCookies("login_flag"));
//        if(this.$store.getters.getlogin_flag!=''){
//          this.$store.dispatch("setid_card",getCookies("id_card"));
//          this.$store.dispatch("setsno",getCookies("sno"));
//          this.$store.dispatch("settno",getCookies("tno"));
//          this.$store.dispatch("setusername",getCookies('name'));
//          this.$store.dispatch("setLogin_state",true);
//          this.login_state=true;
//        }
//        console.log("tno:"+this.$store.getters.gettno);
//        console.log("sno:"+this.$store.getters.getsno);
//        console.log("name:"+this.$store.getters.getusername);
//        console.log("login_flag:"+this.$store.getters.getlogin_flag);
//        console.log("loginstate:"+this.$store.getters.getLongin_state);
//      }else{
//        this.$store.dispatch("setLogin_state",true);
//        this.$store.dispatch("setid_card",msg.id_card);
//        this.$store.dispatch("setsno",msg.sno);
//        this.$store.dispatch("settno",msg.tno);
//        this.$store.dispatch("setusername",msg.name);
//        this.login_state=true;
//      }
  },
  mounted(){
    this.tno=this.$store.getters.gettno
    this.sno=this.$store.getters.getsno
    this.name=this.$store.getters.getusername
    this.login_state=this.$store.getters.getLongin_state
    console.log(this.$store.getters.getLongin_state)
    this.scroll();
    console.log(this.login_state)

  }
  }
</script>
<style scoped>
  @import "./home.css";
</style>

