// localStorage简单封装处理
export const Storage = {
  get(key) {
    let result = localStorage.getItem(key)
    try {
      result = JSON.parse(result)
    } catch (e) {
      return result
    }
    return result
  },
  set(key, value) {
    if (typeof value !== 'string') {
      value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
  },
  remove(key) {
    localStorage.removeItem(key)
  },
  clearAll() {
    localStorage.clear()
  }
}
