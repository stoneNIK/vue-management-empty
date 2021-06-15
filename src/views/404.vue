<template>
  <div class="page-wrap">
    <div class="wrap">
      <img :src="require('@/assets/images/404.png')" />
      <div class="content">
        <span class="code">404</span>
        <span class="text">抱歉，你访问的页面不存在</span>
        <el-button type="primary" @click="goHome" size="small">返回首页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notfound404',
  methods: {
    goHome() {
      location.href = '/'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/404.scss';
</style>
