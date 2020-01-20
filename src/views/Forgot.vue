<template>
  <EmptyLayout>
    <div class="forgot-page">
      <div class="logo">
        <img :src="require('../assets/images/logo@2x.png')" alt />
      </div>
      <el-form class="forgot-form" :model="formData" :rules="rules" ref="forgotForm" label-width="100px">
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="formData.phone" placeholder="请输入您的手机号码" maxlength="11"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="formData.code" class="code-input" placeholder="请输入验证码" maxlength="6"></el-input>
          <el-button class="code-btn" @click="sendCode()" type="primary" :disabled="sending || !!limitCount">{{
            sending ? '发送中...' : limitCount ? limitCount + 'S' : '获取验证码'
          }}</el-button>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input v-model="formData.newPassword" type="password" placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('forgotForm')" :disabled="submitting">{{
            submitting ? '提交中...' : '确认修改'
          }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </EmptyLayout>
</template>

<script>
import EmptyLayout from '@/layout/EmptyLayout'
import UserService from '@/api/user'
import md5 from 'js-md5'
const TimeCount = 60 // 默认倒计时60S
export default {
  name: 'forgot',
  components: {
    EmptyLayout
  },
  data() {
    return {
      limitCount: 0, // 验证码倒计时
      sending: false,
      submitting: false,
      formData: {
        phone: '',
        code: '',
        newPassword: ''
      },
      rules: {
        phone: [
          { required: true, message: '手机号码不能为空', trigger: 'blur' },
          { min: 11, message: '请输入11位手机号码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '验证码不能为空', trigger: 'blur' },
          { min: 6, message: '请输入6位验证码', trigger: 'blur' }
        ],
        newPassword: [{ required: true, message: '新密码不能位空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    async sendCode() {
      if (this.limitCount) {
        return
      }
      const phone = this.formData.phone
      if (!phone) {
        this.$message.error('请先输入手机号码')
        return
      }
      this.sending = true
      try {
        await UserService.getCode(phone)
        this.$message.success('验证码发送成功')
        this.limitCount = TimeCount
        this.timecount()
      } catch (error) {
        console.log(error)
      }
      this.sending = false
    },
    timecount() {
      setTimeout(() => {
        let limitCount = this.limitCount
        if (limitCount < 1) {
          return
        }
        limitCount--
        this.limitCount = limitCount
        this.timecount()
      }, 1000)
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.modifyPassword()
        } else {
          return false
        }
      })
    },
    async modifyPassword() {
      try {
        this.submitting = true
        const { phone, code, newPassword } = this.formData
        await UserService.forgotPassword({ phone, code, newPassword: md5(newPassword) })
        this.$router.push('/login')
      } catch (error) {
        console.log(error)
      }
      this.submitting = false
    }
  }
}
</script>

<style lang="scss" scoped>
.forgot-page {
  min-height: calc(100vh - 124px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .logo {
    margin: 0 auto 50px;
    > img {
      display: block;
      width: 120px;
    }
  }
  .forgot-form {
    margin-bottom: 50px;
    width: 500px;
    .code-input {
      width: 283px;
      margin-right: 5px;
    }
    .code-btn {
      width: 112px;
    }
  }
}
</style>
