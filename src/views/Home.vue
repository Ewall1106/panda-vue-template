<template>
    <div class="home">{{val}}</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      val: '11111'
    }
  },
  mounted () {
    console.error('asdf')
  }
}
</script>

<style lang="scss" scoped>
.home {
  background: red;
  width: 100px;
}
</style>
