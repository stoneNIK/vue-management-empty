import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: 'account',
  state: {
    user: null, // 用户信息
    resources: null // 资源信息
  },
  actions,
  mutations
}
