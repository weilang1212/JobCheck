<template>
  <div class="contian" id="forget_password">
    <!--<div class="forget_password"></div>-->
    <!--提示框-->
    <Loading v-if="loading"></Loading>
    <div class="forget_password-child">
      <!--<button class="btn btn-primary btn-lg " style="display:none" data-toggle="modal" data-target="#myModal">-->
      <!--</button>-->
      <!-- 模态框（Modal） -->
      <div>
        <div class="modal fade bs-example-modal-sm" id="forget_myModal" data-backdrop="false"  tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
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
                {{err_mag}}
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
      <!-- /.modal -->

      <!--修改完成后的模态弹框-->
      <div>
        <div class="modal fade bs-example-modal-sm" id="update_success" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
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
                密码修改成功√
              </div>
              <div class="modal-footer">
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

      <form class="bs-example bs-example-form" role="form">
        <div class="input-group input-group-lg forget_top">
          <h4><span>修改密码</span></h4>
          <button type="button" v-on:click="cancel_uadate" class="close">×</button>
        </div>

        <div class="input-group input-group-lg">
          <span class="input-group-addon "><img class="image" src="../../assets/login_image/sno.png"></span>
          <input type="text" name="usersno" v-model="usersno" :disabled="disabled" class="form-control"
                 placeholder="输入学号或教职工号">
        </div>
        <br>

        <div class="input-group input-group-lg">
          <span class="input-group-addon"><img class="image" src="../../assets/login_image/user.png"></span>
          <input type="text" name="username" v-model="username" :disabled="disabled" class="form-control"
                 placeholder="输入名字">
        </div>
        <br>

        <div class="input-group input-group-lg">
          <span class="input-group-addon"><img class="image" src="../../assets/login_image/id_card.png"></span>
          <input type="text" name="id_card" v-model="id_card" :disabled="disabled" class="form-control"
                 placeholder="输入身份证号">
        </div>
        <br>

        <div class="input-group input-group-lg">
          <input type="text" name="verification" v-model="verification" :disabled="disabled" class="form-control"
                 placeholder="输入验证码">
                <span class="input-group-btn" v-on:click="reset_canvas"><canvas class="span_canvas"
                                                                                id="cvs"></canvas></span>
        </div>
        <!--<verification></verification>-->
        <br>
        <div class="btn-group seleted_">
          <button class="btn btn-default btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{role}}<span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li><a href="#" @click="role_student">学生</a></li>
            <li><a href="#" @click="role_teacher">教职工</a></li>
          </ul>
        </div>
        <br>
        <div v-if="!button_chang">
          <button type="button" name="must" id="button" v-on:click="must"
                  class="btn btn-primary btn-lg btn-block must_top">确定
          </button>
        </div>

        <div v-else style="margin-top:10px;">
          <div class="input-group input-group-lg">
            <span class="input-group-addon"><img class="image" src="../../assets/login_image/password.png"></span>
            <input type="password" name="new_password" v-model="new_password" class="form-control"
                   placeholder="设置六位数字新密码">
          </div>
          <br>

          <div class="input-group input-group-lg">
            <span class="input-group-addon"><img class="image" src="../../assets/login_image/password.png"></span>
            <input type="password" name="must_password" v-model="must_password" class="form-control"
                   placeholder="输入确认密码">
          </div>
          <br>
          <button type="button" name="update" v-on:click="must_uadate"
                  class="btn btn-primary btn-lg btn-block must_top">确定修改
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'forget_pword',
    data()
  {
    return {
      loading:false,
      role:'请选择身份',
      err_mag: '请完善相关信息',
      four_string: '',//四位随机验证码
      button_chang: false,//控制是否加载输入密码区
      username: '',
      password: '',
      usersno: '',
      verification: '',//输入获取验证码
      id_card: '',
      new_password: '',
      must_password: '',
      disabled: false,//控制input为禁止状态
      isClick:false,//判断一个按钮是否被点击过go_login（）和must_uadate（）
    }
  }
  ,
  methods: {
    //验证是否是身份证号码
    idCard:function (id) {
      var p = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
      if (p.test(id))return true;
      else return false;
    }
  ,
    //确认按钮，提交表单查找是否存在该用户
    must: function () {
      var that=this;
      //把字符串转换为大写
      this.verification = this.verification.toUpperCase();
      this.four_string = this.four_string.toUpperCase();
      //console.log("user+" + this.username + "pass:" + this.password + "ver" + this.verification + "sno" + this.usersno);
      if (this.username == '' || this.id_card == '' || this.verification == '' || this.usersno == '') {
        this.err_mag = "请完善相关信息"
        $("#forget_myModal").modal('show');
      }
      else if (!this.idCard(this.id_card)) {
        this.err_mag = "请输入正确的身份证号码"
        $("#forget_myModal").modal("show");
      }
      else if (this.four_string != this.verification) {
        console.log(this.four_string);
        console.log(this.verification);
        this.err_mag = "验证码不正确";
        $("#forget_myModal").modal("show");
        this.showverification();
      }
      else if(this.role=='请选择身份'){
        this.err_mag = "请选择角色";
        $("#forget_myModal").modal("show");
      }
      else {
        that.loading=true;
        if(this.role=='学生'){
          this.showverification();
          that.$axios.post("/student/resetpassword_1",{
            name:that.username,
            id_card:that.id_card,
            sno:that.usersno,
          }).then(successResponse=>{
            that.loading=false;
            console.log(successResponse.data.msg)
            if(successResponse.data.msg=='success'){
              that.button_chang = true;
              that.disabled = true;
            }
            else if (successResponse.data.msg=='fail'){
              that.err_mag = "您的身份信息有误，请重新输入";
              $("#forget_myModal").modal("show");
            }

          }).catch(failResponse => {
            that.loading=false;
            that.err_mag = "服务器暂时无法访问";
            $("#forget_myModal").modal("show");
            console.log(failResponse)
          })
        }else{
          this.showverification();
          that.$axios.post("/teacher/resetpassword_1",{
            name:that.username,
            id_card:that.id_card,
            tno:that.usersno,//输入框sbo既代表学生有代表教职工
          }).then(successResponse=>{
            that.loading=false;
            console.log(successResponse.data.msg)
            if(successResponse.data.msg=='success'){
              that.button_chang = true;
              that.disabled = true;
            }
            else if (successResponse.data.msg=='fail'){
              that.err_mag = "您的身份信息有误，请重新输入";
              $("#forget_myModal").modal("show");
            }

          }).catch(failResponse => {
            that.loading=false;
            that.err_mag = "服务器暂时无法访问";
            $("#forget_myModal").modal("show");
            console.log(failResponse)
          })
        }

      }
    },
    //确认修改密码
    must_uadate:function () {
      var that=this;
      var password = /^\d{6}$/;//验证是否为6位密码
      if (!password.test(this.new_password)) {
        this.err_mag = "密码为六位纯数字"
        $("#forget_myModal").modal("show");
      }
      else if (this.new_password != this.must_password) {
        this.err_mag = "两次密码不一致"
        $("#forget_myModal").modal("show");
      }
      else {
        if(that.role=='学生'){
          that.loading=true;
          that.$axios.post("/student/resetpassword_2",{
            name:that.username,
            id_card:that.id_card,
            sno:that.usersno,
            password:that.new_password,
          }).then(successResponse=>{
            that.loading=false;
            console.log(successResponse.data.msg)
            if(successResponse.data.msg=='success'){
              $("#update_success").modal("show");
              setTimeout(function(){
                if(!that.isClick){
                  $("#update_success").modal("hide");
                  that.$emit("show_pword", false)
                }
              },5000)
            }
            else if (successResponse.data.msg=='fail'){
            }
          }).catch(failResponse => {
            that.loading=false;
            this.err_mag = "服务器暂时无法访问"
            $("#forget_myModal").modal("show");
            console.log(failResponse)
          })
        }else{
          that.$axios.post("/teacher/resetpassword_2",{
            name:that.username,
            id_card:that.id_card,
            tno:that.usersno,
            password:that.new_password,
          }).then(successResponse=>{
            console.log(successResponse.data.msg)
            if(successResponse.data.msg=='success'){
              $("#update_success").modal("show");
              setTimeout(function(){
                if(!that.isClick){
                  $("#update_success").modal("hide");
                  that.$emit("show_pword", false)
                }
              },5000)
            }
            else if (successResponse.data.msg=='fail'){
            }
          }).catch(failResponse => {
            console.log(failResponse)
          })
        }

      }
    },
    //密码修改成功后弹出模态框点击“去登陆”事件
    go_login:function(){
      this.$emit("show_pword", false)
      this.isClick=true;
      return true
    },
    //随机整数min-max
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
      console.log(this.four_string);
      var canvas = document.getElementById("cvs");
      console.log(canvas)
      var ctx = canvas.getContext("2d");
      ctx.clearRect(-180, -250, 500, 500);//清除以前的画板中的内容
      var height = canvas.height;
      var width = canvas.width;
      ctx.font = "70px 宋体"; //设置或返回文本内容的当前字体属性
      ctx.textAlign = "center";//设置或返回文本内容的当前对齐方式
      ctx.textBaseline = "middle";
      for (var j = 0; j < 4; j++) {
        // var txt = four_string[this.getRandomInt(0,four_string.length)];
        // ctx.fillText(four_string[j], , 80);
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
    //刷新验证码
    reset_canvas: function () {
      this.showverification()
    },
    //取消注册（×按钮）
    cancel_uadate:function () {
      this.$emit("show_pword", false)
    },
    //改变角色
    role_student(){
      this.role='学生'
    },
    role_teacher(){
      this.role='教职工'
    }
  },
  mounted: function () {
    this.showverification()
  }
  }
</script>
<style scoped>
  @import "../../assets/css/style.css";
</style>

