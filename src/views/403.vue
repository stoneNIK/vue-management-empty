<template>
  <div class="page-wrap">
    <div class="wrap">
      <img :src="require('@/assets/images/403.png')" />
      <div class="content">
        <span class="code">403</span>
        <span class="text">抱歉，你无权访问该页面</span>
        <a-button type="primary" @click="goHome">返回首页</a-button>
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
