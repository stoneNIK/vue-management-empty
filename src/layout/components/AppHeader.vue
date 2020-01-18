<template>
  <header class="app-header">
    <div class="app-brand">
      <img :src="require('@/assets/images/logo@2x.png')" alt="logo" />
      <a href="/">XX后台管理系统</a>
    </div>
    <div v-if="isLogin" class="app-header-right">
      <el-menu
        default-active="0"
        @select="doNavigate"
        active-text-color="#ccc"
        mode="horizontal"
        class="app-header-right_userdrown"
      >
        <el-submenu index="0" class="submenu">
          <template slot="title">{{ userInfo.userName || userInfo.phone }}</template>
          <el-menu-item index="/user"> <i class="el-icon-setting"></i> 个人中心 </el-menu-item>
          <el-menu-item index="logout"> <i class="el-icon-switch-button"></i> 退出登录 </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </header>
</template>

<script>
import { userToken, userInfo } from '@/utils/cache'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'AppHeader',
  data() {
    return {
      isLogin: false
    }
  },
  computed: mapState({
    userInfo: state => state.account.user || userInfo.get()
  }),
  methods: {
    ...mapActions('account', ['AccountLogout']),
    doNavigate(index) {
      if (index === 'logout') {
        this.logout()
        return
      }
      this.$router.push(index)
    },
    async logout() {
      await this.AccountLogout({ vm: this })
      const { path } = this.$route
      this.$router.push({ path: '/login', query: { redirect: path || '/home' } })
    }
  },
  created() {
    this.isLogin = !!userToken.get()
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/common.scss';
.app-header {
  width: 100%;
  @extend .row-between;
  height: 64px;
  background: $app-header-bg;
  color: $app-header-color;
  padding: 0 15px;
  box-sizing: border-box;
  .app-brand {
    height: 100%;
    @extend %flex-center-row;
    img {
      width: 46px;
      height: auto;
    }
    a {
      text-decoration: none;
      color: $app-header-color;
      margin-left: 10px;
      font-size: 20px;
    }
  }
  .app-header-right {
    height: 100%;
    @extend %flex-center-row;
    &_notify {
      cursor: pointer;
      i {
        font-size: 20px;
      }
    }
    &_userdrown {
      background: $app-header-bg;
      margin-left: 10px;
    }
  }
}
</style>
