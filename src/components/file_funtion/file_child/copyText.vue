<template>
  <div class="copyTop">
    <div class="text">
      <div class="title">
        <h5><span>*</span>文章标题(50字以内)</h5>
        <div class="input-group">
          <input type="text" class="form-control"maxlength=50 placeholder="请输入文章标题" v-model="title" aria-describedby="sizing-addon2">
        </div>
      </div>
      <div class="title">
        <h5><span>*</span>文章内容（内容的长度不超过3万字，系统按照Word字数统计里面的字符数计算）</h5>
        <textarea style="resize: none" v-model="textarea" maxlength=30000><pre></pre></textarea>
      </div>
      <button type="button" class="btn btn-primary" @click="sumbit">提交检测</button>
    </div>
    <div class="tips">
      <h5 class="glyphicon glyphicon-alert">温馨提示</h5>
      <p>系统支持中英语种的论文检测</p>
      <p>系统在检测时会分析文章的前后文关系，所以请您提交文章的全部内容，如果是非全文的检测将不能保证检测的准确性。</p>
      <p>被系统自动识别出来的非正文部分（如目录，标题，公式，图表等）不参与检测，检测字数一般略小于文章字数。</p>
    </div>
  </div>
</template>
<script>
  export default {
    name:'copyText',
    data(){
    return {
      title:'',
      textarea:'',
      disabled:true,
    }
  },
  methods:{

    sumbit(){
      if(this.title==''||this.textarea==''){
        this.disabled=true
        $("#title_text").modal("show");
      }
      else{
        //访问数据库
      }
    },
    //检测输入是否为空
  },
  mounted(){
  }
  }
</script>
<style scoped>
  .copyTop{
    width: 100%;
    border: 0.5px solid #DDDDDD;
    border-top: 0;
  }
  .text{
    margin-left: 3%;
    padding-top:20px;
  }
  .title span{
    color:red;
  }
  .input-group{
    width: 60%;
  }
  .title textarea{
    width:97%;
    height: 500px;
  }
.tips{
  margin-left: 3%;
  margin-top: 10px;
}
</style>
