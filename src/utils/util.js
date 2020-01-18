import log from './util.log.js'
import cookies from './util.cookies.js'

let util = {
  cookies,
  log
}

/**
 * @description 更新标题
 * @param {String} title 标题
 */
util.title = titleText => {
  const processTitle = process.env.VUE_APP_TITLE || '后台管理系统'
  window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ''}`
}

/**
 * @description 打开新页面
 * @param {String} url 地址
 */
util.open = url => {
  var a = document.createElement('a')
  a.setAttribute('href', url)
  a.setAttribute('target', '_blank')
  a.setAttribute('id', 'management-open-link')
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(document.getElementById('management-open-link'))
}

export default util
