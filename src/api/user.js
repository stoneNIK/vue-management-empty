import $request from '@/plugins/request'

const AccountService = {
  // 登陆
  login({ account, password }) {
    return $request.post('/user/login', { account, password })
  },
  // 登出
  logout() {
    return $request.post('/user/logout')
  },
  // 忘记密码 获取验证码
  getCode(phone) {
    return $request.get('/user/getCode', { phone })
  },
  // 忘记密码重置
  forgotPassword({ phone, code, newPassword }) {
    return $request.post('/user/forgetPassword', { phone, code, newPassword })
  },
  // 用户信息
  userInfo: () => {
    return $request.get('/user/info')
  }
}

export default AccountService
