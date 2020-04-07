import request from './fetch'

export const getBasicInfo = () => request.get('/home/info')
