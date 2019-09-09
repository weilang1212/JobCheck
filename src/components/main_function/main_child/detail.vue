<template>
  <div >
    <div class="container-fluid">
      <div class="col-lg-7 col-md-7 col-sm-12 right">
        <div id="context" class="context">
          <!--<p>{{context}}</p>-->
          <p>
            <span v-for="(item,index) in smil" :key="index">
              <br v-if="item.huan">
              <span v-if="item.huan">&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <a v-if="item.results" @click="right_show(index)">{{item.similar}}</a>
              <span v-else>{{item.similar}}</span>

            </span>
            <!--<div v-if="{{item.huan==true}}">-->
            <!--<br>-->
            <!--<a v-if="{{item.results==true}}">{{item.similar}}</a>-->
            <!--<div v-else>{{item.similar}}</div>-->
            <!--</div>-->
            <!--<div v-else>-->
            <!--<a v-if="{{item.results}}">{{item.similar}}</a>-->
            <!--<div v-else>{{item.similar}}</div>-->
            <!--</div>-->

          </p>
          <!--<p>{{context}}</p>-->
          <!--<p>{{context}}</p>-->
          <!--<p>{{context}}</p>-->
          <!--<p>{{context}}</p><p>{{context}}</p>-->
          <!--<p>{{context}}</p>-->
          <!--<p>{{context}}</p>-->
          <!--<pre style="white-space: pre-wrap;word-wrap: break-word;">{{context}}</pre>-->
          <!--<p>{{context}}</p>-->
        </div>
      </div>

      <div class="col-lg-5 col-md-5 col-sm-12 right_1">
        <div v-if="show">
          <h5 class="h5">温馨提示</h5>
          <div>1.查看详情，请点击左侧标红色和标橙色的句子；</div>
          <div>2.红色句子表示相似度在80%以上，绿色句子表示合格；</div>
        </div>
        <div v-else class="context">
          <div>
            <h5>您的语句：<span class="yuanText">{{yuanText}}</span></h5>
            <h5>共找出相似内容：{{smilArray.length}}个</h5>
            <div v-for="(item,index) in smilArray">
              <table class="smilText" cellspacing="0" cellpadding="0">
                <tr class="com_local">
                  <td>
                    <div class="com_XL">{{index+1}}</div>
                  </td>
                  <td>
                    <h5>相似度：<span class="yuanText">{{item.simlD}}</span></h5>
                  </td>
                </tr>
                <tr>
                  <h5>相似内容片段：</h5>
                </tr>
                <tr style="color: green">
                  {{item.text}}
                </tr>
                <tr class="bottom">
                  <div>
                    <h5>来源（本地数据库）</h5>
                    <h5>标题：社会实践</h5>
                    <h5>作者：{{item.name}} 学号：{{item.sno}}</h5>
                    <h5>文章所属学院：{{item.collge}}</h5>
                  </div>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form>
      <input type="file" style="">

    </form>
    <button type="button" @click="text">点击</button>
  </div>
</template>
<script>
  export default {
    name: 'detail',
    props:["smil","context"],
    data()
  {
    return {
      show:true,
      yuanText:'',
      smilArray:[],

    }
  }
  ,
  methods:{
    text:function(){
      var that=this;
      this.$axios.post('/context/selectallcontext', {

      })
        .then(successResponse => {
       this.context=successResponse.data[3].text
        console.log(this.context)
      })
    .catch(failResponse => {
        console.log(failResponse)
      })
    },
    right_show(index){
      var that=this;
      that.smilArray=that.smil[index].simlText
      that.yuanText=that.smil[index].similar
      console.log(that.smilArray);
      that.show=false;
    }
  },
  mounted:function () {
//    var smil=this.smil;
//    var a="aaaaa";
//    for(var i=0;i<smil.length;i++){
//      if(smil[i].huan){
//        if(smil[i].results){
//          $("#context").append('<div><p><a onclick="right_show(10)" class="ppp">'+smil[i].similar+'</a></p></div>');
//        }
//      else $("#context").append('<div><p>'+smil[i].similar+'</div></p>');
//      }
//      else{
//        if(smil[i].results)
//        $(".context div:last-child p").append('<a class="ppp">'+smil[i].similar+'</a>');
//        else $(".context div:last-child p").append('<span>'+smil[i].similar+'</span>');
//      }
//    }
//    $("#context").on("right_show",function(){
//      console.log(i);
//    })
//
//    //$(".context").append('<button class="aaa">点击触发事件</button>');
//
//    $("p").css({"text-indent":"2em","color":"green"})
//    //$("a").css({"cursor":"pointer","color":"red"})
//    $(".ppp").css({"color":"black"})
  }
  }

</script>
<style scoped>

  .context{
    height:840px;
    overflow-y:scroll;

  }
  .context a{
    color: red;
  }
  .right{
    border-top: 0.5px solid #b5b5b5;
    border-left: 0.5px solid #b5b5b5;
    border-bottom: 0.5px solid #b5b5b5;
    height:840px;
  }
  .right_1{
    border-top: 0.5px solid #b5b5b5;
    border-bottom: 0.5px solid #b5b5b5;
    border-right: 0.5px solid #b5b5b5;
    height: 840px;
  }
  .h5{
    margin-top: 50px;
    font-weight: 600;
  }
  .right_1 div div:nth-child(1){
    margin-top: 15px;
  }
  .yuanText{
    color:red;
    opacity: 1;
  }
  .smilText{
    margin: 8px;
    width: 100%;
    border: 1px solid #C0C0C0;
  }
  .com_local {
    display: flex;
    margin-top: 3px;
    flex-direction: row;
    align-items: center;
  }
  .com_XL{
    height: 23px;
    width: 23px;
    line-height: 20px;
    text-align: center;
    border: 0.5px solid #bbbbbb;
  }
  .smilText td:nth-child(2){
    margin-left: 70%;
    opacity: 0.8;
  }
  .smilText td:nth-child(1){
    margin-top: -10px;
    margin-left: 10px;
  }
  .bottom{

  }
  .bottom h5{
    font-size: 10px;
    height: 8px;
  }
</style>
