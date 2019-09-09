<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-6">
          <img src="../../../static/img/logo1.png">
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <h3>我的作业</h3>
          <div>
            <h5>作者：{{title}} 检测时间：{{startTime}}</h5>
          </div>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-6">
          <h5>总体相似度：{{smilarity}}</h5>

          <div class="smilarity">
            <div v-bind:style="{width:smilarity}"></div>
          </div>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-6 button">
          <button type="button" @click="detail" class="btn btn-default">详情报告</button>
          <button type="button" @click="comprehensive"  class="btn btn-default">综合评估</button>
          <button type="button" @click="yuanContext" class="btn btn-default">查看原文</button>
          <button type="button" @click="printPDF" class="btn btn-default">打印PDF</button>
          <button type="button" @click="ModSkills" class="btn btn-default">改重攻略</button>
          <button type="button" @click="useHelp" class="btn btn-default">使用帮助</button>
        </div>
      </div>
    </div>
    <div>
     <componen :localResources="localResources" :startTime='startTime':collge="collge" :textLength="textLength" :smilarity="smilarity" :smil="smil" :context="context"
               :smilText_count="smilText_count" :author="author" :title="title" :htmlTitle="htmlTitle"   :sno="sno" :yuanText_count="yuanText_count" :is="currentComponen"></componen>
    </div>
  </div>

</template>
<script>
  import detail from './main_child/detail.vue'
  import comprehensive from './main_child/comprehensive.vue'
  import yuanContext from './main_child/yuanContext.vue'
  import printPDF from './main_child/printPDF.vue'
  import ModSkills from './main_child/ModSkills.vue'
  import useHelp from './main_child/useHelp.vue'
  import global_ from '../../../static/global.vue'//获得全局变量（相似度）
  import detail_child1 from './main_child/detail_child/detail_child1.vue'
  export default {
    name: 'mian_fun',
    data()
  {
    return {
      author: '左仙',
      title: '实践报告',
      startTime: '',
      smilarity: "87.3%",
      currentComponen:"",
      textLength: 1542,
      yuanText_count: 2152,
      smilText_count:1546,
      sno: '161101041',
      collge:'计算机与信息工程学院',
      arrComponen:['detail','comprehensive','yuanContext','printPDF','ModSkills','useHelp'],
      context: '在实施项目拉动战略的同时,泰安市紧紧抓住泰山文化这一核心优势,一手抓新产品开发,一手抓现有产品提升,' +
      '文化品牌的塑造,进一步丰富提升了泰安、泰山旅游的文化内涵,拉长了产业链,带动了文化产业快速发展壮大,' +
      '实现了由单纯依赖泰山向依靠泰山、多点联动的转变,由单一旅游发展向文化旅游融合发展的转变。   过近几年努力,文化旅游产' +
      '品日渐丰富,但又出现了部分景点游客扎堆,部分景点客源不足、效益不好、作用发挥不够的问题。   为提升文化旅' +
      '游业总体竞争力,泰安市立足文化旅游项目集群优势,以泰山、方特欢乐世界等客源相对稳定景区为龙头,整合串联全市26个' +
      '文化旅游项目和53家宾馆饭店,策划并推出“中华泰山、天下泰安”“三日游”产品。',
      smil: [{similar: '在实施项目拉动战略的同时,', results: false, huan: true,
        simlText:[{text:"泰安市紧紧抓住泰山文化这一核心优势,一手抓新产品开发,一手抓现有产品提升,在实施项目拉动战略的同时,泰安市紧紧抓住泰山文化这一核心优势,一手抓新产品开发,一手抓现有产品提升,",simlD:'98.3%',title:'养老院',sno:'161165004',name:'左仙',collge:'计算机与信息工程学院'}]},
        {similar: '泰安市紧紧抓住泰山文化这一核心优势,一手抓新产品开发,一手抓现有产品提升,', results: true, huan: false,
          simlText:[{text:"泰安市紧紧抓住泰山文化这一核心优势,一手抓新产品开发,一手抓现有产品提升",simlD:'68.3%',title:'留守儿童',sno:'161101004',name:'魏浪',collge:'计算机与信息工程学院'},
            {text:"泰安市紧紧抓住泰山文化这一核心优势,一手抓新产品开发,一手抓现有产品提升,划并推出“中华泰山、天下泰安”“三日游”产品",simlD:'58.3%',title:'留守儿童',sno:'161101044',name:'左仙',collge:'计算机与信息工程学院'}]},
        {similar: '文化品牌的塑造,进一步丰富提升了泰安、泰山旅游的文化内涵,拉长了产业链,带动了文化产业快速发展壮大,' +
          '实现了由单纯依赖泰山向依靠泰山、多点联动的转变,由单一旅游发展向文化旅游融合发展的转变。', results: true, huan: false,
          simlText:[{text:"文化品牌的塑造,进一步丰富提升了泰安、泰山旅游的文化内涵,拉长了产业链,带动了文化产业快速发展壮大,",simlD:'78.32%',title:'寒假社会实践报告',sno:'161101004',name:'邓竟康',collge:'计算机与信息工程学院'}]},
        {similar: '过近几年努力,文化旅游产品日渐丰富,但又出现了部分景点游客扎堆,部分景点客源不足、效益不好、作用发挥不够的问题。', results: false, huan: true,
          simlText:[{text:"文化旅游产品日渐丰富,但又出现了部分景点游客扎堆,部分景点客源一手抓现有产品提升",simlD:'98.3%',title:'暑假实践报告',sno:'161101004',name:'黄思琪',collge:'计算机与信息工程学院'}]},
        {
          similar: '为提升文化旅游业总体竞争力,泰安市立足文化旅游项目集群优势,以泰山、方特欢乐世界等客源相对稳定景区为龙头,整合串联全市26个' +
          '文化旅游项目和53家宾馆饭店,策划并推出“中华泰山、天下泰安”“三日游”产品。', results: true, huan: true,
          simlText:[{text:"为提升文化旅游业总体竞争力,泰安市立足文化旅游项目集群优势,以泰山、方特欢乐世界等客源相对稳定景区为龙头,整合串联全市26个",simlD:'89.3%',title:'寒假社会实践报告',sno:'161101002',name:'罗诂文',collge:'计算机与信息工程学院'}]
        },
      ],
      localResources:[
        {smil:'15.3%',origin:'本地数据库',context:'加大文化改革创新力度推动社会主义文化大发展大繁荣',years:'2012',name:'张三',collge:'计算机信息工程学院',sno:'101101042'},
        {smil:'14.4%',origin:'本地数据库',context:'城市旅游品牌形象的游客心理认知研究',years:'2010',name:'李四',collge:'计算机信息工程学院',sno:'101101052'},
        {smil:'12.8%',origin:'本地数据库',context:'发展生态主导型产业推动其更好更快发展',years:'2004',name:'王五六',collge:'计算机信息工程学院',sno:'101101042'},
        {smil:'8.3%',origin:'本地数据库',context:'稳定现金流的非证券化融资：泰山门票和索道收费权质押案例',years:'2015',name:'小二',collge:'计算机信息工程学院',sno:'101101142'},
        {smil:'4.1%',origin:'本地数据库',context:'金融市场化下中国民营银行发展问题研究',years:'2018',name:'李灿',collge:'计算机信息工程学院',sno:'101101032'},
        {smil:'1.2%',origin:'本地数据库',context:'地域性特色工艺美术文化产业发展刍议',years:'2011',name:'张飞',collge:'计算机信息工程学院',sno:'101101023'}],
    }
    },
  components:{
    detail,
    comprehensive,
    yuanContext,
    printPDF,
    ModSkills,
    useHelp,
    detail_child1,
  },
  methods:{
    //获得时间戳
    time()
    {
      var date = new Date();
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
      var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
      var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
      return (Y + M + D + h + m + s);
    },
    detail(){
      this.currentComponen=this.arrComponen[0];
    },
    comprehensive(){
      this.currentComponen=this.arrComponen[1];
    },
    yuanContext(){
      this.currentComponen=this.arrComponen[2];
    },
    printPDF(){
      this.currentComponen=this.arrComponen[3];
    },
    ModSkills(){
      this.currentComponen=this.arrComponen[4];
    },
    useHelp(){
      this.currentComponen=this.arrComponen[5];
    },
  }
  ,
  mounted:function () {
    this.startTime = this.time();
    this.currentComponen=this.arrComponen[1];
    //console.log(this.time());
  }
  }

</script>
<style scoped>
  .row div:nth-child(1) {
    text-align: center;
  }

  .row div:nth-child(1) img {
    width: 180px;
    margin-top: 20px;
  }

  .row div:nth-child(2) {
    text-align: center;
    background-color: white;
  }

  .row div:nth-child(2) div {
    opacity: 0.7;
  }

  .row div:nth-child(3) {
    display: flex;
    margin-top: 10px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .smilarity {
    border: 0.5px solid red;
    height: 20px;
    width: 120px;
  }

  .row div:nth-child(4) {
    text-align: center;
    margin-top: 20px;
  }

  .smilarity div {
    height: 19.5px;
    background-color: red;
  }

  .button button {
    border-radius: 0;
    width: 100px;
  }
</style>
