<template>
  <div class="top">
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

            <div class="smilarity">
              <div v-bind:style="{width:smilarity}"></div>
            </div>
            <h5>{{smilarity}}</h5>
          </div>
        </td>
      </tr>

      <tr>
        <td align="left">
          <font color="#666666">作业字数<b>：</b>{{yuanText_count}}</font>&nbsp;&nbsp;
          <font color="#666666">检测字数<b>：</b>{{yuanText_count}}</font>&nbsp;&nbsp;
          <font color="#666666">相似字数<b>：</b>{{smilText_count}}</font>&nbsp;&nbsp;
        </td>
      </tr>

      <tr>
        <td align="left">学术期刊（1990-2016）、学位论文（硕博库1990-2016）、会议论文（1990-2016）、互联网资源
        </td>
      </tr>

      <tr>
        <td align="left">
          <b>报告注解</b>
        </td>
      </tr>

      <tr>
        <td align="left">总体相似度 = 相似字数 / 检测字数
        </td>
      </tr>
      <tr>
        <td align="left">被系统自动识别出来的非正文部分（如目录，标题，公式，图表，参考文献等）不参与检测，检测字数一般略小于论文字数。
        </td>
      </tr>
      <tr>
        <td align="left">相似字数 =（句子1字数 * 句子1相似度 + 句子2字数 * 句子2相似度 + ...... + 句子n字数 *
          句子n相似度），句子相似度范围0.00~1.00，绿色句子相似度按照0计算。
        </td>
      </tr>
      <tr>
        <td align="left">
          红色句子为重度相似(80%~100%)，建议修改；绿色句子表示没有检测到相似语句。
        </td>
      </tr>
    </table>
    <table class="table" cellspacing="5" cellpadding="3"
           bordercolordark="#FFFFFF" bordercolorlight="#FFFFFF">
      <tr>
        <td align="left">
          <b>本地相似资源</b>
        </td>
      </tr>

      <tr class="com_local" v-for="(item,index) in localResources">
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
</template>
<script>
  import global_ from '../../../../static/global.vue'//获得全局变量（相似度）
  export default {
    name: "comprehensive",
    props:["yuanText_count","smilText_count","smilarity","localResources"],
    data()
  {
    return {}
  }
  }
</script>
<style scoped>
  .top {
    width: 100%;
  }
  .table {
    margin: 8px;
    border: 1px solid #C0C0C0;
  }
  .table tr td {
    padding-left: 7px;
  }
  .smilarity {
    border: 0.5px solid red;
    height: 14.5px;
    width: 100px;
    margin-left: 10px;
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
  .com_local{
    display: flex;
    margin-top: 3px;
    flex-direction: row;
    align-items: center;

  }
  .com_local td{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .com_XL{
    height: 23px;
    width: 23px;
    line-height: 20px;
    text-align: center;
    border: 0.5px solid #bbbbbb;
  }
  .com_local td div:nth-child(2){
    opacity: 0.7;

  }
  .com_div{
    margin-left: 6px;
    opacity: 1;
  }
  .internet_data{
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
  }
</style>
