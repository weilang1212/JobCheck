<template>
  <div>
    <div class="container">
      <div class="col-lg-12 col-sm-12 col-md-12 col-xs-12">
        <table class="table table-bordered">
          <caption class="h3 text-info">数据库信息表</caption>
        </table>

        <div class="tab-content" id="tabContent">
          <div id="toolbar" class="btn-group">
            <button id="btn_add" type="button" class="btn btn-info btn-sm rightSize">
              <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
            </button>
            <button id="btn_edit" type="button" class="btn btn-info btn-sm rightSize">
              <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改
            </button>
            <button id="btn_delete" type="button" class="btn btn-info btn-sm rightSize">
              <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
            </button>
          </div>
          <div class="right_btn">

            <span style="font-size: 14px">搜索条件：</span>
            <div class="btn-group dropdown" id="dropdown">

              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                文章标题 <span class="caret"></span>
              </button>
              <input type="hidden" name="hidedrop_1" id="hidedrop_1" value="超级管理员" />
              <ul class="dropdown-menu">
                <li><a href="#">所属学院</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">文章标题</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">所属学生学号</a></li>
              </ul>
            </div>

            <div class="input-group">
              <input type="text" class="form-control" placeholder="关键字">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">查询</button>
              </span>
            </div>

          </div>
        </div>
        <table class="table table-bordered">
          <thead>
          <tr>
            <th style="width: 30px"><input type="checkbox" aria-label="..."></th>
            <th data-field="sno" style="width:50px;">编号</th>
            <th data-field="sno" style="width: 80px;">学号</th>
            <th data-field="name">名字</th>
            <th data-field="collge">二级学院</th>
            <th data-field="title">文章标题</th>
            <th data-field="count">总字数</th>
            <th data-field="delete">操作</th>
          </tr>
          <tr v-for="(item,index) in msg" :key="index">
            <td><input type="checkbox" v-model="check" :value="index" aria-label="..."></td>
            <td>{{index+1}}</td>
            <td>{{item.sno}}</td>
            <td>{{item.name}}</td>
            <td>{{item.collge}}</td>
            <td>{{item.title}}</td>
            <td>{{item.count}}</td>
            <td>
              <button class="btn btn-info">查看原文</button>
              <button style="margin-left: 5px" class="btn btn-danger">删除</button>
            </td>
          </tr>
          </thead>
        </table>
        <div class="yema1">
          <div class="input-group input">
            <span class="input-group-addon">每页显示</span>
              <span class="input-group-btn">
                <button class="btn btn-default">10条</button>
              </span>
          </div>
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li><a>首页</a></li>
            </ul>
          </nav>
          <nav class="yema2" aria-label="Page navigation">
            <ul class="pagination">
              <li>
                <a href="#"><span aria-hidden="true">上一页</span></a>
              </li>
              <li class="li"><a href="#">1</a></li>
              <li>
                <a href="#"><span aria-hidden="true">下一页</span>
                </a>
              </li>
            </ul>
          </nav>
          <nav class="yema3" aria-label="Page navigation">
            <ul class="pagination">
              <li><a>尾页</a></li>
            </ul>
          </nav>
          <div class="input-group input">
            <input type="number" class="form-control">
              <span class="input-group-btn">
                <button class="btn btn-default" type="button">跳转</button>
              </span>
            <span class="input-group-addon">共{{msg.length}}条记录</span>
          </div>
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
        {check:false,sno:'161101004',name:'张三',collge:'计算机与信息工程学院',title:"社会时间报告",count:'3210'},]
    }
  },
  methods:{

  }
  }
</script>
<style scoped>
  td {
    vertical-align: middle;
    text-align: center;
  }
  th{
    vertical-align: middle;
    text-align: center;
  }
  .li a{
    color: black;
  }
  .yema1{
    width: 800px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .yema2{
    margin-left: 3px;
  }
  .yema3{
    margin-left: 3px;
  }
  .input{
    margin-top:-5px
  }
  .form-control{
  }
  .tab-content{
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .right_btn{
    display: flex;
    flex-direction: row;
    align-items: center;;
  }
</style>
