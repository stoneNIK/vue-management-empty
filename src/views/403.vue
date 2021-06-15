<template>
  <div class="page-wrap">
    <div class="wrap">
      <img :src="require('@/assets/images/403.png')" />
      <div class="content">
        <span class="code">403</span>
        <span class="text">抱歉，你无权访问该页面</span>
        <el-button type="primary" @click="goHome" size="small">返回首页</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'forbidden403',
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
