<template>
  <div class="page-wrap">
    <div class="wrap">
      <img :src="require('@/assets/images/500.png')" />
      <div class="content">
        <span class="code">500</span>
        <span class="text">抱歉，服务器出错了</span>
        <el-button type="primary" @click="goHome" size="small">返回首页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'interval500',
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
