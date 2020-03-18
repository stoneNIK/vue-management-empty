import { userInfo } from '@/utils/cache'
export default {
  userInfo: state => {
    return state.user || userInfo.get() || {}
  }
}
