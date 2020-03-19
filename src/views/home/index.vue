<template>
  <div class="home">
    <img class="logo" src="@/assets/logo.png" alt="logo" />

    <van-cell-group title="项目相关">
      <van-cell title="vue-mall" is-link url="https://github.com/Ewall1106/mall" />
      <van-cell
        title="panda-vue-template"
        is-link
        url="https://github.com/Ewall1106/panda-vue-template"
      />
      <van-cell title="yapi接口文档" is-link url="http://yapi.demo.qunar.com/project/17982" />
    </van-cell-group>

    <van-cell-group title="相关介绍">
      <van-cell title="vue-mall" is-link url="https://github.com/Ewall1106/mall" />
      <van-cell
        title="panda-vue-template"
        is-link
        url="https://github.com/Ewall1106/panda-vue-template"
      />
    </van-cell-group>

    <svg-icon icon-class="backtop" :width="30" :height="30"/>
    <back-top />
  </div>
</template>

<script>
import BackTop from '@/components/BackTop'

export default {
  name: 'Home',
  components: {
    BackTop
  },
  data() {
    return {
      val: '11111'
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  background: #f5f5f593;
  .logo {
    display: block;
    width: 200px;
    margin: 0 auto;
    padding-top: 40px;
  }
  h2 {
    padding: 10px 0;
  }
  a {
    color: #42b983;
  }
}
</style>
