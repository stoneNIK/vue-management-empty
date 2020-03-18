import UserService from '@/api/user'
import md5 from 'js-md5'
import { userToken, userInfo } from '@/utils/cache'

export default {
  AccountLogout: ({ commit }) => {
    return new Promise(async (resolve, reject) => {
      try {
        await UserService.logout()
        userToken.remove()
        userInfo.remove()
        commit('SET_USRE', {})
        commit('SET_RESOURCES', [])
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },
  AccountLogin: ({ commit }, { account, password }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await UserService.login({
          account,
          password: md5(password)
        })
        userToken.set(res.token)
        userInfo.set(res.user)
        commit('SET_USRE', res.user)
        commit('SET_RESOURCES', res.resources)
        resolve(res)
      } catch (error) {
        reject(error)
      }
    })
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
