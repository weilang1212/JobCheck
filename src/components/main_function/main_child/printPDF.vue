<template>
  <div class="contain">
    <div id="pdfDom">
      <table class="table" cellspacing="5" cellpadding="3"
             bordercolordark="#FFFFFF" bordercolorlight="#FFFFFF">
        <tr>
          <td align="left">
            <b>总体信息</b>
          </td>
        </tr>

        <tr>
          <td align="left">
            <div class="com_xs">
              <h5>总体相似度：</h5>
              <h5>{{smilarity}}</h5>
            </div>
          </td>
        </tr>
        <tr>
          <td align="left">
            <div class="com_xs">
              <h5>标题：</h5>
              <h5>{{title}}</h5>
            </div>
          </td>
        </tr>
        <tr>
          <td align="left">
            <div class="com_xs">
              <h5>姓名：</h5>
              <h5>{{author}}</h5>
            </div>
          </td>
        </tr>
        <tr>
          <td align="left">
            <div class="com_xs">
              <h5>学号：</h5>
              <h5>{{sno}}</h5>
            </div>
          </td>
        </tr>
        <tr>
          <td align="left">
            <div class="com_xs">
              <h5>所属学院：</h5>
              <h5>{{collge}}</h5>
            </div>
          </td>
        </tr>
        <tr>
          <td align="left">
            <font>作业字数<b>：</b>{{yuanText_count}}</font>&nbsp;&nbsp;
            <font>检测字数<b>：</b>{{yuanText_count}}</font>&nbsp;&nbsp;
            <font>相似字数<b>：</b>{{smilText_count}}</font>&nbsp;&nbsp;
          </td>
        </tr>
      </table>
      <table class="table" cellspacing="5" cellpadding="3">
        <tr>
          <td align="left">
            <b>本地相似资源</b>
          </td>
        </tr>
        <tr class="com_local" v-for="(item,index) in localResources">
          <div class="com_local-child">
            <div class="com-child">
              <td>
                <div class="com_XL">{{index+1}}</div>
              </td>
              <td>{{item.smil}}</td>
              <td>
                <div>来源：</div>
                <div>{{item.origin}}</div>
              </td>
              <td>
                <div>篇名：</div>
                <div>《{{item.context}}》</div>
              </td>
            </div>
            <div class="com-child2">
              <td>
                <div>年份：</div>
                <div>{{item.years}}年</div>
              </td>
              <td>
                <div>作者：</div>
                <div>{{item.name}}</div>
              </td>
              <td>
                <div>学院：</div>
                <div>{{item.collge}}</div>
              </td>
              <td>
                <div>学号：</div>
                <div>{{item.sno}}</div>
              </td>
            </div>
          </div>
        </tr>

      </table>

      <table class="table" cellspacing="5" cellpadding="3"
             bordercolordark="#FFFFFF" bordercolorlight="#FFFFFF">
        <tr>
          <td align="left">
            <b>互联网相似资源</b>
          </td>
        </tr>

        <div class="internet_data">
          <h6>暂无互联网匹配资源</h6>
        </div>
      </table>
    </div>
    <button type="button" class="btn btn-info btn-lg btn-block" @click="getPdf(title)">下载PDF</button>
  </div>
</template>
<script>
  //import htmlPDF from '../../../../static/htmlToPdf/htmlToPdf.js'
  import global_ from '../../../../static/global.vue'//获得全局变量（相似度）
  import comprehensive from './comprehensive.vue'
  export default {
    name: "printPDF",
    props:["title","author","smilarity","textLength","collge","yuanText_count","smilText_count","sno","htmlTitle","localResources"],
    data()
  {
    return {
      //title: '留守儿童实践报告',

    }
  }
  ,
  methods:{
    //
  }
  ,
  components:{
    comprehensive
  }
  }
</script>
<style scoped>
  .contain {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .btn-block{
    width: 650.28px;
  }
  #pdfDom {
    width: 650.28px;
  }

  .table {
    margin: 8px;
    width: 650.28px;
    border: 1px solid #C0C0C0;
  }

  .table tr td {
    padding-left: 7px;
  }

  .smilarity div {
    height: 14px;
    background-color: red;
  }

  .com_xs {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .com_xs h5:nth-child(3) {
    margin-left: 10px;
  }

  .com_local td {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .com_XL {
    height: 23px;
    width: 23px;
    line-height: 20px;
    text-align: center;
    border: 0.5px solid #bbbbbb;
  }

  .internet_data {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
  }

  .com_local-child {
    display: flex;
    flex-direction: column;
  }

  .com-child {
    display: flex;
    flex-direction: row;
  }

  .com-child2 {
    display: flex;
    flex-direction: row;
    margin-left: 35px;
  }
</style>
