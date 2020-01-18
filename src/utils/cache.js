import { Storage } from './storage'
import * as Consts from '../constant'
// 存储的数据对象
export class StorageData {
  constructor(name) {
    this.name = name
  }
  get() {
    return Storage.get(this.name)
  }
  set(value) {
    return Storage.set(this.name, value)
  }
  remove() {
    return Storage.remove(this.name)
  }
}
// app 本地缓存的工具
export const userToken = new StorageData(Consts.USER_TOKEY_KEY)
export const userInfo = new StorageData(Consts.USER_INFO_KEY)
