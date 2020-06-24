<template>
  <div class="container">
    <div :class="[isCheck ? 'leftCheck' : 'leftNoCheck', 'basicStyle' ]"> 
      <div class="left mgr5">
          <div>产品名称： U惠购月卡(0元)</div>
          <div>操作员工号：11011</div>
          <div>订购渠道：上海互联网业务运营部公众直销团队</div>
          <div>产品状态：在用</div>
      </div>
      <div class="right">
          <div>产品名称： U惠购月卡(0元)</div>
          <div>操作员工号：11011</div>
          <div>订购渠道：上海互联网业务运营部公众直销团队</div>
          <div>产品状态：在用</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        isCheck:Boolean
    },
    data () {
        return {
        //    isCheck: false
        }
    },
}
</script>

<style lang="less" scoped>
.leftCheck{
    background-color: #BEF2FF;
}
.leftCheck::after{
    content: "";
    display: block;
    clear:both;
    position: absolute;
    top: 10%;
    right: -40px;
    border-top: 20px solid transparent;
    border-left: 40px solid #BEF2FF;
    border-bottom: 20px solid transparent;
}
.leftNoCheck{
    background-color: #DADCE0 ;
}
.leftNoCheck::after{
    content: "";
    display: block;
    clear:both;
    position: absolute;
    top: 10%;
    left: -40px;
    border-top: 20px solid transparent;
    border-right: 40px solid #DADCE0 ;
    border-bottom: 20px solid transparent;
}

  
</style>
<style lang="less" >
     .basicStyle {
         position: relative;
         width: 600px;
         height: 200px;
         display: flex;
         .left, .right{
             padding: 10px;
             height: 200px;
             width: 49%;
             box-sizing: border-box;
             span, div{
                height:40px;
                line-height:40px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
             }
             
         }
        
     }
     .mgr5{
            margin-right: 2%; 
         }
</style>
