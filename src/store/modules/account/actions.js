import UserService from '@/api/user'
import md5 from 'js-md5'
import { userToken, userInfo } from '@/utils/cache'

export default {
  AccountLogout: async ({ commit }) => {
    await UserService.logout()
    userToken.remove()
    userInfo.remove()
    commit('SET_USRE', {})
  },
  AccountLogin: async ({ commit }, { account, password }) => {
    const { token } = await UserService.login({
      account,
      password: md5(password)
    })
    userToken.set(token)

    // 获取用户信息，如果用户在login接口返回了用户信息，可以去掉这一步
    const user = await UserService.userInfo()
    userInfo.set(user)
    commit('SET_USRE', user)
    return user
  },
  AccountUserInfo: async ({ commit, state }) => {
    let user = state.user
    if (!(user && user.name)) {
      user = userInfo.get()
    }
    if (!(user && user.name)) {
      user = await UserService.userInfo()
      userInfo.set(user)
    }
    commit('SET_USRE', user)
    return user
  }
}
