<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="(item, index) in breadList"
        :key="index"
        :to="index == breadList.length - 1 ? '' : { path: item.path }"
        >{{ item.meta.menuName }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  data() {
    return {
      breadList: []
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched
      matched = [{ path: '/home', meta: { menuName: '首页' } }, ...matched]
      this.breadList = matched
    }
  },
  created() {
    this.getBreadcrumb()
  }
}
</script>

<style lang="scss" scoped></style>
