<template>
  <div class="login-view">
    <vue-particles class="particles-wrap" color="#dedede"></vue-particles>
    <div class="login-view-main">
      <div class="title">XXXXX有限公司</div>
      <div class="sub-title">XX管理系统</div>
    </div>
    <div class="login-view-form-wrap">
      <div class="login-logo">
        <div>XX管理系统</div>
        <div>XXXXX有限公司</div>
        <img :src="require('../assets/images/logo@2x.png')" alt />
      </div>
      <div class="login-form" @keyup.enter="submitForm">
        <div class="form-item" :class="{ error: accountNotice }">
          <div class="form-item-label">
            <i class="el-icon-user"></i>
          </div>
          <div class="form-item-value">
            <input
              type="text"
              placeholder="用户名"
              v-model="loginFormData.account"
              maxlength="11"
              autocomplete="off"
              autofocus
              @blur="checkAccount"
            />
            <span class="err-txt" v-if="accountNotice">{{ accountNotice }}</span>
          </div>
        </div>
        <div class="form-item" :class="{ error: passwordNotice }">
          <div class="form-item-label">
            <i class="el-icon-lock"></i>
          </div>
          <div class="form-item-value">
            <input
              type="password"
              placeholder="密码"
              maxlength="50"
              v-model="loginFormData.password"
              autocomplete="off"
              @blur="checkPassword"
            />
            <span class="err-txt" v-if="passwordNotice">{{ passwordNotice }}</span>
          </div>
        </div>
        <div class="form-forgot">
          <a href="javascript:;" class="forgot-link" @click="forgot">忘记密码?</a>
        </div>
        <div class="form-option">
          <a href="javascript:;" class="login-btn" :disabled="true" @click="submitForm">{{
            submitting ? '正在登陆...' : '立即登录'
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      submitting: false,
      accountNotice: '',
      passwordNotice: '',
      loginFormData: {
        account: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('account', ['AccountLogin']),
    checkAccount() {
      const { account } = this.loginFormData
      if (!account) {
        this.accountNotice = '请输入用户名'
        return
      }
      this.accountNotice = ''
    },
    checkPassword() {
      const { password } = this.loginFormData
      if (!password) {
        this.passwordNotice = '请输入密码'
        return
      }
      if (password.length < 6) {
        this.passwordNotice = '密码位数必须大于6位'
        return
      }
      this.passwordNotice = ''
    },
    async submitForm() {
      this.checkAccount()
      this.checkPassword()
      if (this.accountNotice || this.passwordNotice) {
        return
      }

      this.submitting = true
      try {
        await this.AccountLogin({
          vm: this,
          ...this.loginFormData
        })
        const { redirect } = this.$route.query
        this.$router.replace(redirect || '/home')
      } catch (error) {
        console.log(error)
      }
      this.submitting = false
    },
    forgot() {
      this.$router.push('/forgot')
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
$theme-color: #435b81;
$theme-hover-color: #506c9b;
$danger-color: #f00;

.login-view {
  position: relative;
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  background-color: #333;
  font-size: 14px;
  .particles-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  &-main {
    text-align: center;
    color: #f1f1f1;
    letter-spacing: 3px;
    user-select: none;
    .title {
      font-size: 5em;
      line-height: 2;
      font-weight: bold;
    }
    .sub-title {
      font-size: 2.2em;
      line-height: 1.8;
    }
  }
  &-form-wrap {
    width: 350px;
    height: 70vh;
    min-height: 600px;
    padding: 30px;
    background: rgba($color: #fff, $alpha: 0.1);
    box-shadow: 0 0 15px rgba($color: #000000, $alpha: 0.3), 0 0 30px rgba($color: #000000, $alpha: 0.15);
    z-index: 3;
    display: flex;
    flex-direction: column;
    .login-logo {
      flex: auto;
      padding: 50px 30px;
      user-select: none;
      > div {
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 28px;
        line-height: 1.6;
        letter-spacing: 2px;
        & + div {
          font-size: 18px;
        }
      }
      img {
        display: block;
        margin: 35px auto;
        width: 100px;
      }
    }
    .login-form {
      flex: none;
      padding-bottom: 50px;
      .form-item {
        margin-top: 30px;
        display: flex;
        align-items: flex-end;
        font-size: 24px;
        &-label {
          flex: none;
          margin-right: 20px;
          color: #fff;
        }
        &-value {
          position: relative;
          flex: auto;
          .err-txt {
            position: absolute;
            bottom: -16px;
            font-size: 12px;
            color: $danger-color;
          }
          input {
            display: block;
            width: 100%;
            padding: 5px 20px;
            font-size: 16px;
            background: none;
            border: none;
            box-shadow: none;
            color: #fff;
            outline: none;
            border-bottom: 1px solid #fff;
            box-sizing: border-box;
            &::placeholder {
              color: #fff;
              letter-spacing: 3px;
            }
          }
        }
        &.error {
          .form-item-value input {
            border-color: $danger-color;
          }
          .form-item-label {
            color: $danger-color;
          }
        }
      }
      .form-forgot {
        margin: 30px 0;
        text-align: right;
        .forgot-link {
          color: #aaa;
          &:hover {
            color: #ccc;
          }
        }
      }
      .form-option {
        margin-top: 40px;
        .login-btn {
          $btn-height: 2.5vw;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: $btn-height;
          min-height: 40px;
          border-radius: $btn-height;
          color: #fff;
          font-size: 20px;
          font-weight: 100;
          background-color: $theme-color;
          text-decoration: none;
          transition: all 0.3s;
          &:hover {
            background-color: $theme-hover-color;
          }
          &:disabled {
            background-color: #999;
            &:hover {
              background-color: $theme-color;
            }
          }
        }
      }
    }
  }
  // 兼容性处理
  $type: screen;
  $proto: max-width;
  $value: 1000px;
  @media #{$type} and ($proto: $value) {
    font-size: 12px;
    &-main {
      display: none;
    }
    &-form-wrap {
      height: 100%;
    }
  }
}
</style>
