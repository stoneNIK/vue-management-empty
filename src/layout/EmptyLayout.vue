<template>
  <el-container class="app-container">
    <AppHeader />
    <div class="app-main">
      <slot />
    </div>
    <AppFooter />
  </el-container>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  name: 'empty-layout',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  padding: 0;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.app-main {
  position: relative;
  display: flex;
  flex: auto;
}
</style>
