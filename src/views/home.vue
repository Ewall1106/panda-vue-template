<template>
  <div class="home">
    {{val}}
    <van-button type="default">默认按钮</van-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'
import { getUserInfo } from '@/api/user'

Vue.use(Button)

export default {
  name: 'Home',
  data () {
    return {
      val: '11111'
    }
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    getInfo () {
      getUserInfo().then(res => {
        console.log('ssssssssss', res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  background: red;
  width: 100px;
  height: 100px;
  line-height: 100px;
}
</style>
