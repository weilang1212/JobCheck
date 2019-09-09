<template>
  <div class="body">
    <Loading v-if="loading"></Loading>
  <div class="page-container" id="form">
      <div class="modal fade bs-example-modal-sm" id="myModal" data-backdrop="false" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
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
          </div>
        </div>
      </div>
    <h3>用户登录</h3>
    <form>
      <input class="input" type="text" name="username" v-model="username" placeholder="学号或教职工号">
      <input class="input" type="password" name="password" v-model="password" placeholder="密码">
      <div class="bottom">
        <div class="checkbox" style="color: #fff;">
          <input type="checkbox" name="checked" v-model="checked">一天免登陆
        </div>
        <div>
          <a>
            <small type="button" v-on:click="bint_forget">忘记密码？</small>
          </a>
        </div>
      </div>
      <button v-on:click="s_submit" class="button" type="button" id="btn">学生组</button>
      <button v-on:click="t_submit" class="button" type="button">教职工组</button>
      <div class="error" v-bind:style="error_style"><span>+</span></div>
    </form>
  </div>
  </div>
</template>
<script>
  import {setCookies,getCookies} from '../../utils/cookies.js'
  import defaultImg1 from '../../assets/img/backgrounds/2.jpg';
  import defaultImg2 from '../../assets/img/backgrounds/3.jpg';
  import defaultImg3 from '../../assets/img/backgrounds/1.jpg';
  export default {
    name: "login_top",
    data(){
    return {
      err_mag:'用户名或密码错误',
      loading:false,
      username: '',
      password: '',
      show_forgetpw:false,
      success: false,
      checked: false,
      form1: '',
      error_style: {
        top: '',
        display: 'none',
        show_forpas: false
      },
      img1: 'url(' + defaultImg1 + ')',
      img2: 'url(' + defaultImg2 + ')',
      img3: 'url(' + defaultImg3 + ')',
    }
  },
  methods: {
    //提交学生组按钮
    s_submit: function () {
      if (this.username == '') {
        this.error_style.top = '27px';
        this.error_style.display = 'inline-block'
        this.success = false;
        return false;
      }
      else if (this.password == '') {
        this.error_style.top = '96px';
        this.error_style.display = 'inline-block';
        this.success = false;
        return false;
      }
      else {
        this.error_style.display = 'none';
        //console.log(this.password)
        var that = this;
        that.loading=true;
        this.$axios.post('/student/login', {
          username: that.username,
          password: that.password,
        }).then(successResponse=>{
          console.log(successResponse.data);
            that.loading=false;
          if (successResponse.data.name != null) {
            //console.log("成功")
            sessionStorage.setItem("userInfo",JSON.stringify(successResponse.data))
            console.log(sessionStorage.getItem("userInfo"))
            setCookies("username", that.username, 1);
            if(that.checked){
              setCookies("id_card",successResponse.data.id_card,1)
              setCookies("name",successResponse.data.name,1)
              setCookies("sno",successResponse.data.sno,1)
              setCookies("login_flag",200,1);
            }
            else{
              //如果没有点击一天内登陆，即清除cookies里面的
              setCookies("id_card","",-1)
              setCookies("name","",-1)
              setCookies("sno","",-1)
              setCookies("username", "", -1);
              setCookies("login_flag","",-1);
              setCookies("tno","",-1);
              that.$store.dispatch("setid_card",getCookies("id_card"));
              that.$store.dispatch("setsno",getCookies("sno"));
              that.$store.dispatch("setusername",getCookies('name'));
              that.$store.dispatch("setlogin_flag",getCookies("login_flag"));
              that.$store.dispatch("setLogin_state",false);
            }
            $("#myModal").modal("hide");
            $("#update_success").modal("hide");
            var path=that.$route.query.redirect
            console.log(path)
            that.$router.replace({path:path===undefined ?'/':path})
          }
          else {
            that.err_mag='用户名或密码错误'
            that.success = true;
            $("#myModal").modal("show");
          }
        }
      ).catch(failResponse=>{
          that.loading=false;
          that.err_mag='服务器暂时无法访问'
          $("#myModal").modal("show");
          console.log(failResponse)})
      }
//        if (this.username == '魏浪' && this.password == '123') {
//          //自动记录用户名1天
//          setCookies("username", this.username, 1);
//          if(this.checked)setCookies("login_flag",200,1);
//          return true;
//        }
      },
      //教职工登录
      t_submit: function () {
        console.log(this.checked)
        if (this.username == '') {
          this.error_style.top = '27px';
          this.error_style.display = 'inline-block'
          this.success = false;
          return false;
        }
        else if (this.password == '') {
          this.error_style.top = '96px';
          this.error_style.display = 'inline-block';
          this.success = false;
          return false;
        }
        else {
          this.error_style.display = 'none';
          //console.log(this.password)
          var that=this;
          that.loading=true;
          this.$axios.post('/teacher/login', {
            username:that.username,
            password: that.password,
          }).then(successResponse => {
            that.loading=false;
            console.log(successResponse.data);
            if (successResponse.data.name != null) {
              //console.log("成功")
              sessionStorage.setItem("userInfo",JSON.stringify(successResponse.data))
              setCookies("username", that.username, 1);
              if(that.checked){
                setCookies("id_card",successResponse.data.id_card,1)
                setCookies("name",successResponse.data.name,1)
                setCookies("tno",successResponse.data.tno,1)
                setCookies("login_flag",200,1);
              }
              else{
                setCookies("id_card","",-1)
                setCookies("name","",-1)
                setCookies("sno","",-1)
                setCookies("username", "", -1);
                setCookies("login_flag","",-1);
                setCookies("tno","",-1);
                that.$store.dispatch("setid_card",getCookies("id_card"));
                that.$store.dispatch("setsno",getCookies("sno"));
                that.$store.dispatch("setusername",getCookies('name'));
                that.$store.dispatch("setlogin_flag",getCookies("login_flag"));
                that.$store.dispatch("setLogin_state",false);
              }
              $("#myModal").modal("hide");
              $("#update_success").modal("hide");
              var path=that.$route.query.redirect
              console.log(path)
              that.$router.replace({path:path===undefined ?'/':path})
            }
            else {
              that.err_mag='用户名或密码错误'
              that.success = true;
              $("#myModal").modal("show");
            }
          })
        .catch(failResponse => {
            that.loading=false;
            that.err_mag='服务器暂时无法访问'
            $("#myModal").modal("show");
            console.log(failResponse)
          })
        }
    },
    bint_forget: function () {
      this.show_forgetpw=true;
      this.$emit('show_pword',true)
    },
    //改变背景图片
    background_image()
    {
      var t = 0;
      //$("body").css({"background-image": this.img2})
      $(".body").css({"background-image": this.img2})
      var that=this;
      var i = setInterval(function () {
        switch (t % 3) {
          case 0:
          {$(".body").css({"background-image": that.img1});break;}
          case 1:
          {$(".body").css({"background-image": that.img2});break;}
          case 2:
          {$(".body").css({"background-image": that.img3});break;}
        }
        t++;
        if (t == 6)clearInterval(i);
      }, 5000)
      //$("body").css("background": "#f8f8f8","font-family":"'PT Sans', Helvetica, Arial, sans-serif","text-align":"center","background-size":"cover","transition-duration":"1s","z-index":"0"})
    },


  },
  mounted: function () {
    var username = getCookies('username')//等vue实例加载完成后获取cookies中的值
    this.username = username;
    //setCookies("username", "", -1);
    //console.log(username);
    this.form1 = document.getElementById("form1");//通过钩子函数获取dom值
    //更换背景图片
    this.background_image();
  },
  }
</script>
<style scoped>
  @import "../../assets/css/style.css";
</style>



