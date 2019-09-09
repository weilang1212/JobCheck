<template>
  <div class="container-fluid">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 context">
        <pre>{{context}}}</pre>
    </div>
  </div>
</template>
<script>
  export default {
    name:"yuanContext",
    props:["context"],
    data(){
    return {

    }
  }
  }
</script>
<style scoped>
  .context{
    height: 850px;
    overflow-y:scroll;
    border-top: 1px solid #b5b5b5;
  }
  pre{
    white-space: pre-wrap;
    word-wrap: break-word;
    background-color: transparent;
    border:0;
  }
</style>
