<template>
  <EmptyLayout>
    <div class="admin-layout">
      <el-aside :width="sideWidth" class="admin-layout_left">
        <el-menu default-active="/home" :collapse="collapsed" router class="admin-layout_left_menus">
          <el-menu-item index="/home" class="menu">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="admin-layout_main">
        <div class="admin-layout_main_header">
          <div class="collapse-left-btn" @click="switchCollapse">
            <i :class="'el-icon-s-' + (collapsed ? 'unfold' : 'fold')"></i>
          </div>
          <div class="current-page-title">
            <GoBack />
            <BreadCrumb />
          </div>
        </div>
        <div class="admin-layout_main_content">
          <div class="admin-layout_main_content_inner">
            <vue-scroll :ops="ops">
              <router-view />
            </vue-scroll>
          </div>
        </div>
      </el-main>
    </div>
  </EmptyLayout>
</template>

<script>
import EmptyLayout from '@/layout/EmptyLayout'
import GoBack from './components/GoBack'
import BreadCrumb from './components/BreadCrumb'
export default {
  name: 'AdminLayout',
  components: {
    EmptyLayout,
    GoBack,
    BreadCrumb
  },
  data() {
    return {
      collapsed: false,
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {
          background: '#409EFF',
          opacity: 0
        },
        bar: {
          background: '#999'
        }
      }
    }
  },
  computed: {
    sideWidth() {
      return this.collapsed ? '64px' : '200px'
    }
  },
  methods: {
    switchCollapse() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/common.scss';
.admin-layout {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: calc(100vh - 124px);
  &_left {
    height: 100%;
    min-height: calc(100vh - 124px);
    border-right: 1px $color-border-4 solid;
    overflow: hidden;
    &_menus {
      min-height: calc(100vh - 124px);
      .menu {
        i {
          margin-top: -4px;
        }
      }
      .el-menu-item {
        font-size: 14px;
      }
    }
  }
  &_main {
    padding: 0;
    background: $color-bg;
    position: relative;
    max-height: calc(100vh - 124px);
    &_header {
      height: 60px;
      line-height: 60px;
      width: 100%;
      box-sizing: border-box;
      padding-left: 15px;
      background: $color-bg / 1.05;
      position: absolute;
      top: 0;
      left: 0;
      @extend .row-start;
      .collapse-left-btn {
        cursor: pointer;
      }
      .current-page-title {
        margin-left: 15px;
        font-size: 16px;
        display: flex;
        align-items: center;
      }
    }

    &_content {
      padding: 15px;
      padding-top: 75px;
      display: flex;
      flex: 1;
      height: calc(100% - 90px);
      &_inner {
        background: $color-bg;
        flex: 1;
        border-radius: 2px;
        height: 100%;
        max-height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        box-sizing: border-box;
      }
    }
  }
}
</style>
