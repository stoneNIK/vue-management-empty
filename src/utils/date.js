/**
 * 日期格式化
 * @param fmt y年 M 月份 d 日 h 12制小时 H 24制小时 m分钟 s 秒 q季度 S 毫秒
 * @returns {2017-07-19 23:22:22}
 */
Date.prototype.format = function(fmt) {
  let o = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'H+': this.getHours(), //小时
    'h+': this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
  return fmt
}
// 日期增减常用处理
Date.prototype.plusYear = function(value) {
  this.setFullYear(this.getFullYear() + parseInt(value))
  return this
}
Date.prototype.plusMonth = function(value) {
  this.setMonth(this.getMonth() + parseInt(value))
  return this
}
Date.prototype.plusDate = function(value) {
  this.setDate(this.getDate() + parseInt(value))
  return this
}
Date.prototype.plusHour = function(value) {
  this.setHours(this.getHours() + parseInt(value))
  return this
}
Date.prototype.plusMinute = function(value) {
  this.setMinutes(this.getMinutes() + parseInt(value))
  return this
}
Date.prototype.plusSecond = function(value) {
  this.setSeconds(this.getSeconds() + parseInt(value))
  return this
}
Date.prototype.plusMilliSecond = function(value) {
  this.setMilliseconds(this.getMinutes() + parseInt(value))
  return this
}

Date.prototype.toRelativeFormat = function(labels, fmt) {
  var json = this.toRelativeJson()
  if (!fmt) {
    fmt = 'yyyy-MM-dd HH:mm'
  }
  if (json == this) {
    return this.format(fmt)
  }
  var now = new Date()
  var result = ''
  var keys = ['second', 'minute', 'hour', 'day', 'month', 'year']
  //当前时间之前
  if (now.getTime() > this.getTime()) {
    for (var i = 0; i < keys.length; i++) {
      if (json[keys[i]] > 0) {
        result = json[keys[i]] + labels[i] + '前'
        break
      }
    }
  } else {
    /* if(json.day > 30) {
       result = this.format('yyyy-MM-dd HH:mm');
       } else {
  
       }*/
    for (var j = keys.length - 1; j > 0; j--) {
      if (json[keys[j]] > 0) {
        result += json[keys[j]] + labels[j] + ''
      }
    }
  }
  return result
}

Date.prototype.toRelativeString = function(fmt) {
  var labels = ['秒', '分钟', '小时', '天', '月', '年']
  return this.toRelativeFormat(labels, fmt)
}
/**
 * 相差的时间 day 天 hour 小时 minute 分钟 second 秒
 * @returns {Object}
 */
Date.prototype.toRelativeJson = function() {
  var d_minutes, d_hours, d_days, d_seconds, d_years
  var now = new Date()
  var result = new Object()
  var timeNow = parseInt(now.getTime() / 1000)
  var timestamp = this.getTime()
  //当前时间之前
  if (now.getTime() > timestamp) {
    d_seconds = timeNow - timestamp / 1000
    d_years = now.getFullYear() - this.getFullYear()
    d_days = parseInt(d_seconds / 86400)
    d_hours = parseInt(d_seconds / 3600)
    d_minutes = parseInt(d_seconds / 60)
    //&& d_days < 4
    if (d_years > 0) {
      d_days = 0
      d_hours = 0
      d_minutes = 0
      d_seconds = 0
    } else if (d_days > 0) {
      d_hours = 0
      d_minutes = 0
      d_seconds = 0
    } else if (d_days <= 0 && d_hours > 0) {
      d_days = 0
      d_minutes = 0
      d_seconds = 0
    } else if (d_hours <= 0 && d_minutes > 0) {
      d_days = 0
      d_hours = 0
      d_seconds = 0
    } else if (d_minutes <= 0 && d_seconds > 0) {
      d_days = 0
      d_hours = 0
      d_minutes = 0
      d_seconds = d_seconds <= 0 ? 0 : Math.ceil(d_seconds)
    } else {
      return this
    }
  } else {
    //当前时间之后
    d_years = this.getFullYear() - now.getFullYear()
    d_seconds = timestamp / 1000 - timeNow
    if (d_seconds < 0) {
      return this
    }
    d_days = parseInt(d_seconds / 86400)
    d_hours = parseInt(d_seconds / 3600) - d_days * 24
    d_minutes = parseInt(d_seconds / 60) - d_days * 24 * 60 - d_hours * 60
    d_seconds = d_seconds - d_days * 24 * 60 * 60 - d_hours * 60 * 60 - d_minutes * 60
    d_seconds = d_seconds <= 0 ? 0 : Math.ceil(d_seconds)
  }
  result.year = d_years
  result.day = d_days
  result.hour = d_hours
  result.minute = d_minutes
  result.second = d_seconds
  return result
}
