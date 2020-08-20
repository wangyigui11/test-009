<template>
  <!-- <div>
    <input type="text" v-model="count" />
    <el-button @click="increment">点击增加</el-button>
    <p>{{ nickname }}</p>
    <p>{{ age }}</p>
    <p>{{ gender }}</p>
    <p>'Todos为true的length', {{ a }}</p>
    <p>'Todos为false的length', {{ b }}</p>
    <button @click="arrayPush">往数组中添加数据</button>
    <br />
    <br />
    <input type="text" placeholder="修改nickname" v-model="nickname1" />
    <button @click="editNickname">确定修改</button>
    <hr />
    <img src="../static/fengjing.jpg" alt />
  </div>-->
  <!-- <div id="index">
    <ul>
      <li v-for="(item, index) in imgArr" :key="index">
        <img :src="item" />
      </li>
    </ul>
    <p>测试测试测试</p>
    <p>测试测试测试</p>
    <p>测试测试测试</p>
    <p>测试测试测试</p>
    <img :src="imgArr[2]" />
  </div>-->
  <div class="demo-image__preview">
    <el-image
      class="profile-comments-ratings-content-list-item--img-item"
      fit="contain"
      :src="url"
      @click.native="handleImgClick()"
    >
      <div slot="load" class="image-slot">
        <i class="el-icon-picture-outline">Loading...</i>
      </div>
    </el-image>
    <el-image-viewer v-if="watchBigImg" :on-close="closeViewer" :url-list="srcList" />

    <!-- <el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList"></el-image> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import ElImageViewer from "element-ui/packages/image/src/image-viewer";
export default {
  data() {
    return {
      watchBigImg: false,
      nickname1: "",
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ]
    };
  },
  methods: {
    closeViewer() {
      this.watchBigImg = false;
    },
    handleImgClick() {
      console.log('11');
      this.watchBigImg = true;
    },
    // 通过mutation 的方式， 而非直接修改 store.state.count
    // increment() {
    //   this.$store.commit("increment");
    //   console.log("this.$store.state.count", this.$store.state.count);
    // },
    // 触发 action 中的方法 我们使用dispatch 分发
    increment() {
      this.$store.dispatch("incre");
    },
    editNickname() {
      console.log(this.nickname1);
      this.$store.commit("editNickname", this.nickname1);
    },
    arrayPush() {
      this.$store.commit("arrayPush");
    }
  },
  computed: {
    ...mapState({
      count: state => state.count,
      nickname: state => state.nickname,
      age: state => state.age,
      gender: state => state.gender
    }),
    // 辅助函数
    ...mapGetters({ a: "doneTodos", b: "falseTodos" })
  },
  mounted() {

  }
};
</script>

<style></style>
