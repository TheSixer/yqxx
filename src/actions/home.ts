import {
  HOME_BANNER
} from '../constants/home'
import { createAction } from '@/utils/redux'

/**
 * 购物车信息
 * @param {*} payload
 */
export const dispatchHome = (payload: any = {}) => createAction({
  url: '/home/info',
  type: HOME_BANNER,
  payload
})
