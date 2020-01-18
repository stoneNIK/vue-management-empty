import $service from './axios'

const request = {}

request.get = (url, params = {}) => {
  return $service({
    url,
    method: 'GET',
    params
  })
}

request.post = (url, data = {}) => {
  return $service({
    url,
    method: 'POST',
    data
  })
}

export default request
