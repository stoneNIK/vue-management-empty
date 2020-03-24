import $service from './axios'

const request = {}

request.get = (url, params = {}, headers) => {
  return $service({
    url,
    method: 'GET',
    params,
    headers
  })
}

request.post = (url, data = {}, headers) => {
  return $service({
    url,
    method: 'POST',
    data,
    headers
  })
}

export default request
