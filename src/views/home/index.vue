<template>
  <div class="home">
    {{val}}
    <van-button type="default">默认按钮</van-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
  // background: red;
  // width: 100px;
  // height: 100px;
  // line-height: 100px;
}
</style>
