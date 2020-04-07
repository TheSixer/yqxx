/**
 * 适当封装 Redux，简化调用
 */
/* eslint-disable import/prefer-default-export */
import fetch from '../services/fetch'

export function createAction(options) {
  const { url, payload, method, fetchOptions, cb, type } = options
  return (dispatch) => {
    return fetch.request({ url, data: payload }, method).then((res) => {
      console.log(res);
      dispatch({ type, payload: cb ? cb(res) : res })
      return res
    })
  }
}
