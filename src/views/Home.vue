<template>
  <div>
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
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      nickname1: ""
    };
  },
  methods: {
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
  }
};
</script>

<style></style>
