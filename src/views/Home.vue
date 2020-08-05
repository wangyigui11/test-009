<template>
  <div class="home">
    <div id="buttons">
       <el-button @click="change">左侧切换</el-button>
        <!-- <el-button @click="this.$router.push({path:'home',params:{ type:"leftChecked"}})">左侧选中小卡片</el-button>
        <el-button>左侧没选中小卡片</el-button> -->
        <el-button>右侧选中小卡片</el-button>
        <el-button>右侧没选中小卡片</el-button>
    </div>
    <div class="content"  >
        <left-checked class="leftCheck" v-for="(item, index) in list" :key= index :isCheck=isCheck></left-checked>
        <right-checked class="rightCheck"></right-checked>
    </div>
  </div>

</template>

<script>
import LeftChecked from '@/components/LeftCard'
import RightChecked from '@/components/RightCard'

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
    return {
      list: [1],
      isCheck:false
    }
  },
  name: 'Home',
  components: {
    LeftChecked,
    RightChecked,
  },
  methods:{
     change () {
       this.isCheck = !this.isCheck
     }
  }
 
}
</script>
<style lang="less" scoped>
 .home{
   padding: 0px 200px;
 }
  #buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: pink;
    .el-button{
      margin-right:20px;
      padding: 15px 20px;
    }
  }
  .content{
    margin-top: 20px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
