import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
  namespaced: 'account',
  state: {
    user: null // 用户信息
  },
  actions,
  getters,
  mutations
}
