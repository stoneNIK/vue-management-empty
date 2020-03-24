<template>
  <footer class="app-footer">
    <p>
      copyright&copy;2019 XXXXXX有限公司
      <a href="http://beian.miit.gov.cn" target="_blank">川ICP备XXXXX</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
@import '@/styles/common.scss';
.app-footer {
  flex: none;
  padding: 10px 10px;
  width: 100%;
  @extend .row-center;
  background: $app-footer-bg;
  color: #fff;
  font-size: 14px;
  a {
    color: #fff;
    text-decoration: none;
  }
}
</style>
