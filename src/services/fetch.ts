import Taro from "@tarojs/taro"
import {
  BASE_URL,
  HTTP_ERROR
} from '../config/index'

/**
* 检查http状态值
* @param response
* @returns {*}
*/
function checkHttpStatus(response: API.Response, resolve, reject) {
 if (response.statusCode >= 200 && response.statusCode < 300) {
   resolve(response.data)
 } else {
   const message = HTTP_ERROR[response.statusCode] || `ERROR CODE: ${response.statusCode}`
   response.data.errorCode = response.statusCode
   response.data.error = message
   reject(response.data)
 }
}

export default {
  request(options: any, method?: string) {
    const { url } = options

    return new Promise((resolve, reject) => {
      Taro.request({
        header: {
          'content-type': 'application/json',
          // 'Authorization': Taro.getStorageSync('token')
        },
        ...options,
        method: method || 'GET',
        url: `${BASE_URL}${url}`,
      }).then((res) => {
        checkHttpStatus(res, resolve, reject)
      }).catch(err => console.log(err))
    })
  },
  get(url: string, data: object = {}) {
    return this.request({
      url,
      data
    })
  },
  post(url: string, data: object = {}) {
    return this.request({
      url,
      data: qs.stringify(data)
    }, 'POST')
  },
  put(url: string, data: object = {}) {
    return this.request({
      url,
      data: qs.stringify(data)
    }, 'PUT')
  },
  delete(url: string, data: object = {}) {
    return this.request({
      url,
      data: qs.stringify(options.data)
    }, 'DELETE')
  }
}
