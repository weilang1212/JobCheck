<template>
  <div class="upload">
      <div class="top">
        <h5>提醒：系统仅支持doc、docx格式文档
        </h5>
      </div>
    <form>

      <div class="form-group">
        <!--<input type="file" id="exampleInputFile" name="file" @chang="tirggerFile($event)">-->
        <!--<input type="text"  name="text">-->
      </div>
      <!--<button type="button" @click="sumbit_doc" class="btn btn-primary">提交</button>-->
    </form>
    <input id ="input-1" name ="input-1" multiple type ="file">
  </div>
</template>
<script >
  export default {
    name:'upload',
    data(){
    return {
    }
  },
  methods:{
    sumbit_doc(){
      location. reload()
      console.log(this.text)
    },
    tirggerFile:function (event) {
      file=event.target.files
      console.log(file)
    },
  },
  mounted(){
    $("#input-1").fileinput({
      language: 'zh',
      uploadUrl: 'http://localhost:8080/sign',
      showCaption: true,//是否显示被选文件的简介
      showUpload: true,//是否显示上传按钮
      showRemove: true,//是否显示删除按钮
      showClose: true,//是否显示关闭按钮
      enctype: 'multipart/form-data',
      allowedFileExtensions : ['docx', 'doc'],
      uploadAsync:false, //false 同步上传，后台用数组接收，true 异步上传，每次上传一个file,会调用多次接口
      layoutTemplates: {
        actionUpload: ''//就是让文件上传中的文件去除上传按钮
//      actionDelete: '',//去除删除按钮
      },
      browseClass: 'btn btn-primary',
      maxFileCount: 2,
      minFileCount : 1,
    });
  },
  }
</script>
<style scoped>
  .upload{
    width: 100%;
    border: 0.5px solid #DDDDDD;
    border-top: 0;
  }
  .top h5{
    color:#0C7FE9;
    margin-top: 0;
    padding-top: 20px;
    margin-left: 10px;
  }
  .form-group{
    margin-top:30px
  }
  .btn-primary{
    margin-top: 30px;
     width: 200px;
    border-radius: 20px;
  }
</style>
