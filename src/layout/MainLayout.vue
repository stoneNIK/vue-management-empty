<template>
  <EmptyLayout>
    <div class="admin-layout row">
      <div class="admin-layout_left">
        <SideBar :is-collapse="collapsed" />
      </div>
      <div class="admin-layout_main column">
        <div class="admin-layout_main_header">
          <div class="collapse-left-btn" @click="switchCollapse">
            <i :class="'el-icon-s-' + (collapsed ? 'unfold' : 'fold')"></i>
          </div>
          <div class="mana-ml row">
            <GoBack />
            <BreadCrumb />
          </div>
        </div>
        <div class="admin-layout_main_content">
          <div class="admin-layout_main_content_inner">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </EmptyLayout>
</template>

<script>
import EmptyLayout from '@/layout/EmptyLayout'
import SideBar from './components/SideBar'
import GoBack from './components/GoBack'
import BreadCrumb from './components/BreadCrumb'
export default {
  name: 'MainLayout',
  components: {
    EmptyLayout,
    SideBar,
    GoBack,
    BreadCrumb
  },
  data() {
    return {
      collapsed: false
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
  flex: auto;
  &_left {
    flex: none;
    height: 100%;
    background: $app-sidebar-bg;
    overflow-x: hidden;
    @extend %scrollbar-beauty;
    transition: 0.2s;
    &_menus {
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
    background: $app-content-bg;
    flex: auto;
    height: 100%;
    &_header {
      height: 40px;
      line-height: 40px;
      box-sizing: border-box;
      padding-left: 15px;
      background: $app-main-header-bg;
      flex: none;
      @extend .row-start;
    }

    &_content {
      flex: auto;
      padding: 20px;
      @extend .column;
      &_inner {
        background-color: #fff;
        flex: auto;
        height: 100%;
        overflow-x: hidden;
        @extend %scrollbar-beauty;
      }
    }
  }
}
</style>
