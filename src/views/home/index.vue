<template>
  <div class="home">
    <img class="logo" src="@/assets/logo.png" alt="logo" />

    <h2>项目说明:</h2>
    <ul>
      <li>
        <a
          href="https://github.com/Ewall1106/panda-vue-template"
          target="_blank"
          rel="noopener"
        >panda-vue-template</a>
      </li>
    </ul>

    <h2>相关介绍:</h2>
    <ul>
      <li>
        <a
          href="https://github.com/Ewall1106/panda-vue-template"
          target="_blank"
          rel="noopener"
        >panda-vue-template</a>
      </li>
    </ul>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    width: 200px;
    margin-top: 90px;
  }
  h2 {
    padding: 10px 0;
  }
  a {
    color: #42b983;
  }
}
</style>
