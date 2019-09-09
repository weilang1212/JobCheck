<template>
  <div id="context" class="context">
    <p id="pid">
      速度极快很过分的哭声会计师的那部分<span>高考</span>啊水电开发<a>点击我</a>
    </p>
    <p>{{context}}</p>
    <p>{{context}}</p>
    <p>{{context}}</p>
    <p>{{context}}</p>
    <p>{{context}}</p>
    <p>{{context}}</p>
    <p>{{context}}</p>
    <p>{{context}}</p>
    <p>{{context}}</p>
  </div>
</template>
<script>
  export default {
    name:'detail_child1',
    props:["smil"],
    data(){
      return {
        context:'空间的反馈给多个三个'
      }
    },
  merhods:{

  },
  mounted:function () {
    var smil=this.smil;
    for(var i=0;i<smil.length;i++){
      if(smil[i].huan){
        if(smil[i].results)
          $("#context").append('<div>'+'<p>'+'<a>'+smil[i].similar+'</a>'+'</p>'+'</div>');
        else $("#context").append('<div>'+'<p>'+smil[i].similar+'</div>'+'</p>');
      }
      else{
        if(smil[i].results)
          $(".context div>p:last-child").append('<a>'+smil[i].similar+'</a>');
        else $(".context>p:last-child").append('<span>'+smil[i].similar+'</span>');
      }
    }
    $("p").css({"text-indent":"2em","color":"green"})
    $("a").css({"cursor":"pointer","color":"red"})
    this.chaiFen();
  }
  }
</script>
