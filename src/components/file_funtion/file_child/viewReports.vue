<template>
  <div>
    <div class="container">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <table class="table table-striped">
            <thead>
              <tr style="background: #E6E6E6;">
               <th style="width: 300px">标题</th>
               <th data-field="name">状态</th>
               <th data-field="smil">相似度</th>
               <th data-field="starttime">提交时间</th>
               <th data-field="delete">操作</th>
             </tr>

            <tr>
              <td><input type="checkbox" aria-label="...">{{details.title}}</td>
              <td style="color: #00C8C1;">检测完成</td>
              <td>{{details.smil}}</td>
              <td>{{details.starttime}}</td>
              <td>
                <button class="btn btn-info" @click="viewReport">查看报告</button>
                <button style="margin-left: 5px" class="btn btn-danger">删除</button>
              </td>
            </tr>
            </thead>
          </table>
          <div>
            <p>合计1条，当前第1页，共1页。</p>
          </div>
          <div style="margin-top:50px">
            <h5 style="color: #0C7FE9;">提醒：系统仅在未关闭浏览器时保存并且只能保存一条记录，检测完成后请尽快下载您的检测报告!</h5>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:"viewReports",
    data()
  {
    return{
      title:'项目计划书',
      smil:'87.8%',
      details:{title:'项目计划书',starttime:'2017-08-02 11:25',smil:'87.8%'},
      check:[],
      msg:[{check:false,sno:'161101004',name:'张三',collge:'计算机与信息工程学院',title:"社会时间报告",count:'3210'},
        {check:false,sno:'161101404',name:'李四',collge:'计算机与信息工程学院',title:"寒假社会实践报告",count:'5120'},
        {check:false,sno:'161101004',name:'网二',collge:'计算机与信息工程学院',title:"社会时间报告",count:'3650'},
        {check:false,sno:'161101004',name:'张三',collge:'计算机与信息工程学院',title:"社会时间报告",count:'3210'},
        {check:false,sno:'161101404',name:'李四',collge:'计算机与信息工程学院',title:"寒假社会实践报告",count:'5120'},
        {check:false,sno:'161101004',name:'网二',collge:'计算机与信息工程学院',title:"社会时间报告",count:'3650'},
        {check:false,sno:'161101004',name:'张三',collge:'计算机与信息工程学院',title:"社会时间报告",count:'3210'},
        {check:false,sno:'161101404',name:'李四',collge:'计算机与信息工程学院',title:"寒假社会实践报告",count:'5120'},
        {check:false,sno:'161101004',name:'网二',collge:'计算机与信息工程学院',title:"社会时间报告",count:'3650'},
        {check:false,sno:'161101004',name:'张三',collge:'计算机与信息工程学院',title:"社会时间报告",count:'3210'},
        {check:false,sno:'161101404',name:'李四',collge:'计算机与信息工程学院',title:"寒假社会实践报告",count:'5120'},
        {check:false,sno:'161101004',name:'网二',collge:'计算机与信息工程学院',title:"社会时间报告",count:'3650'}]
    }
  },
  methods:{
    viewReport(){
        this.$router.push({path:'/main_fun'})
    }
  }
  }
</script>
<style scoped>
  .container{
    margin-top: 20px;
  }
  table{
    border-bottom:0.5px solid #DDDDDD ;
  }
  td {
    vertical-align: middle;
  }
</style>
