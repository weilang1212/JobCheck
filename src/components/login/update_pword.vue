<template>
  <div>

    <div>
      <div class="modal fade bs-example-modal-sm" id="updataSuccess"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
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
              {{err_msg}}
            </div>
            <div v-if="update_success" class="modal-footer">
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
    <div class="top">
      <span class="glyphicon glyphicon-log-out" aria-hidden="true">安全退出</span>
    </div>
    <div class="password">
      <h5>修改密码</h5>
      <hr>
    </div>
    <div class="password1">
      <h5><span>注意:</span><span>修改完密码之后需要重新进行登录</span></h5>
    </div>
    <div class="button-b">
      <div class="button_child">
        <h5>当前密码：</h5>
        <input type="password" class="form-control" v-model="current_password" placeholder="输入当前密码" aria-describedby="basic-addon1">
        <h6 v-if="save()==1" >*密码不能为空</h6>
        <h6 v-else style="color:black">当前密码有效</h6>
      </div>
      <div class="button_child">
        <h5>新密码：</h5>
        <input type="password" class="form-control" v-model="new_password" placeholder="输入新密码" aria-describedby="basic-addon1">
        <h6 v-if="save()==2">*新密码不能为空</h6>
        <h6 v-if="save()==6">*新密码只能为六为数字</h6>
        <h6 v-if="save()!=6&&save()!=2" style="color: black;">密码长度为六位，且只能为纯数字</h6>
      </div>
      <div class="button_child">
        <h5>新密码确认：</h5>
        <input type="password" class="form-control" v-model="must_password" placeholder="确认密码" aria-describedby="basic-addon1">
        <h6 v-if="save()==3">*确认密码不能为空</h6>
        <h6 v-if="save()==5">*两次密码不一样</h6>
        <h6 v-if="save()!=3&&save()!=5" style="color: black;">确认密码和新密码保持一致</h6>
      </div>
      <div class="button_child">
        <h5>验证码：</h5>
        <input type="text" name="verification" v-model="verification" class="form-control sm" placeholder="输入验证码">
        <span class="input-group-btn" v-on:click="reset_canvas"><canvas class="span_canvas" id="canvas"></canvas></span>
        <h6 v-if="save()==4">*请输入验证码</h6>
        <h6 v-if="!yes_ver">验证码不正确</h6>
      </div>
      <button type="button" @click="must_save" class="btn btn-success">确认保存</button>
    </div>

  </div>
</template>
<script>
  import {setCookies,getCookies} from '../../utils/cookies.js'
  export default {
    name: 'update_pword',
    data()
  {
    return {
      update_success:false,
      err_msg: '',
      verification: '',
      current_password: '',
      new_password: '',
      must_password: '',
      four_string: '',
      yes_ver:true,
    }

  }
  ,
  methods:{

  //随机整数
  getRandomInt: function (min, max) {
    min = Math.ceil(min);//向上取整，得到大于或等于min的最小整数
    max = Math.floor(max);//对max取整
    return Math.floor(Math.random() * (max - min + 1)) + min; //不含最大值，含最小值
  }
  ,
  /**生成一个随机色**/
  randomColor: function (min, max) {
    var r = this.getRandomInt(min, max);
    var g = this.getRandomInt(min, max);
    var b = this.getRandomInt(min, max);
    return "rgb(" + r + "," + g + "," + b + ")";
  },
  //显示验证码
  showverification: function () {
    this.four_string = '';//调用函数函数之前重置four_string的值
    var count = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm123456789";
    for (let i = 0; i < 4; i++) {
      this.four_string += count[this.getRandomInt(0, count.length - 1)];
    }
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(-180, -250, 500, 500);//清除以前的画板中的内容
    var height = canvas.height;
    var width = canvas.width;
    ctx.font = "70px 宋体"; //设置或返回文本内容的当前字体属性
    ctx.textAlign = "center";//设置或返回文本内容的当前对齐方式
    ctx.textBaseline = "middle";
    for (var j = 0; j < 4; j++) {
      ctx.save()
      ctx.fillStyle = this.randomColor(100, 200)
      ctx.fillText(this.four_string[j], 50 + j * 50, 80);
      ctx.restore()
      ctx.font = this.getRandomInt(40, 70) + 'px SimHei';
//                    ctx.translate(40, 23)
//                    var edg = this.getRandomInt(4, 20);//旋转后不好控制刷新验证码方向
//                    ctx.rotate(-edg * Math.PI / 180)
      ctx.restore();
    }
  },
  reset_canvas: function () {
    this.showverification()
  },
    //确认保存
    save:function () {
      var that = this;
      var password = /^\d{6}$/;//验证是否为6位密码
      this.verification = this.verification.toUpperCase();
      this.four_string = this.four_string.toUpperCase();
      //console.log("user+" + this.username + "pass:" + this.password + "ver" + this.verification + "sno" + this.usersno);
      if (this.current_password == '') {this.yes_ver=true;return 1}
      else if (this.new_password == ''){this.yes_ver=true;return 2}
      else if (!password.test(this.new_password)){this.yes_ver=true;return 6}
      else if (this.must_password == ''){this.yes_ver=true;return 3}
      else if (this.new_password != this.must_password){this.yes_ver=true;return 5}
      else if (this.verification == ''){this.yes_ver=true;return 4}
      else {
        return 0;
      }
    },
    //退出登录
    login_out(){
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
    },
    must_save:function(){
     if (this.verification != this.four_string) {
        this.showverification();
        this.yes_ver=false;
        return
      }
      else if(this.save()==0){
       var that=this;
       this.yes_ver=true;
       var sno=that.$store.getters.getsno;
       var tno=that.$store.getters.gettno;
       if(sno!=''){
         that.$axios.post('/student/resetpassword_2', {
           password: that.new_password,
           name:that.$store.getters.getusername,
           id_card:that.$store.getters.getid_card,
           sno:that.$store.getters.getsno,
         }).then(successResponse=>
         {
           if(successResponse.data.msg=='success'){
             that.err_msg = '密码修改成功';
             that.update_success=true;
             $("#updataSuccess").modal("show");
             that.login_out();//退出登录
             setTimeout(function(){
               if(!that.isClick){
                 $("#update_success").modal("hide");
                 that.$router.push({path:'/login'})
               }
             },5000)
           }
           else if(successResponse.data.msg=='fail'){
             that.err_msg = '原密码错误，请重新输入'
             that.current_password = '';
             that.new_password = ''
             that.must_password = ''
             that.verification = ''
             that.update_success=false
             $("#updataSuccess").modal("show");
           }
         }
       ).catch(failResponse=>
         {console.log(failResponse)})
       }
       else if(tno!=''){
         that.$axios.post('/teacher/resetpassword_2', {
           password: that.new_password,
           name:that.$store.getters.getusername,
           id_card:that.$store.getters.getid_card,
           tno:that.$store.getters.gettno,
         }).then(successResponse=>
         {
           if(successResponse.data.msg=='success'){
             that.err_msg = '密码修改成功';
             that.update_success=true;
             that.login_out()
             $("#updataSuccess").modal("show");
             setTimeout(function(){
               if(!that.isClick){
                 $("#update_success").modal("hide");
                 that.$router.push({path:'/login'})
               }
             },5000)
           }
           else if(successResponse.data.msg=='fail'){
             that.err_msg = '原密码错误，请重新输入'
             that.current_password = '';
             that.new_password = ''
             that.must_password = ''
             that.verification = ''
             that.update_success=false
             $("#updataSuccess").modal("show");
           }
         }
       ).catch(failResponse=>
         {console.log(failResponse)})
       }
       else{
         that.update_success=false
         that.err_msg = '身份已失效，请重新登录'
         $("#updataSuccess").modal("show");

       }

        }
    },
    //去登陆
    go_login(){
      $("#updataSuccess").modal("hide");
      this.$router.push({path:'/login'})
    }
  },
  mounted(){
    this.showverification()
    console.log("aaa")
  },
  }
</script>
<style scoped>
  .top{
    height: 60px;
    background-color: #f8f8f8;
  }
  .top span{
    float: right;
    margin-top:20px;
    opacity: 0.7;
    margin-right: 30px;
  }
  .password{
    width: 98%;
    height: 50px;
    margin-left: 1%;
  }
  .password h5{
    margin-top: 20px;
    font-weight: 600;
    opacity: 0.8;
  }
  .password1{
    height: 60px;
    display: flex;
    align-items: center;
    background-color: #fcf8e3;
    width: 95%;
    border-radius: 7px;
    margin-left: 2.5%;
  }
  .password1 span:nth-child(1){
    font-size: 20px;
    margin-left: 20px;
    color:red;
  }
  .password1 span:nth-child(2){
    margin-left: 10px;
    opacity: 0.7;
  }
  .button-b{
    width: 80%;
    margin-left: 10%;
  }
  .button_child{
    margin-top:20px;
    display: flex;
    margin-left: 10px;
    align-items: center;
  }
  .button_child h5{
    text-align: right;
    font-weight: 600;
    width: 100px;
    opacity: 0.8;
  }
  .button-b h6{
    opacity: 0.7;
    color:red;
    margin-left: 10px;
  }
  .form-control{
    width: 230px;
  }
  .sm{
    width: 160px;
  }
  .input-group-btn{
    margin-left: 10px;
    height: 35px;
    width: 80px;
    border: 0.7px solid #c8cccf;
  }
  .span_canvas{
    height: 35px;
    width: 80px;
  }
  .btn-success{
    margin-top: 30px;
    margin-left: 10%;
  }
</style>
