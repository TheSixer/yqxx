const delay = require('mocker-api/utils/delay') // 延时 模拟请求异步问题
const Mock = require('mockjs')

const Random = Mock.Random

const mockApi = {
  'GET /home/info': Mock.mock({
    "bannerList|4": [{  //  生成|num个如下格式名字的数据
      "id|+1":  1,  //  数字从当前数开始后续依次加一
      "name": "@cname", // 名字为随机中文名字
      "age|18-28":  25, // 年龄为18-28之间的随机数字
      "sex|1":  ["男","女"],  //  性别是数组中的一个，随机的
      "job|1":  ["web","UI","python","php"], // 工作是数组中的一个
      "title": Random.csentence(5, 10), //  随机生成一段中文文本。
      "img": Random.image('1920x1080', '#00405d', '#FFF', 'Mock.js')
    }]
  })
}

module.exports = delay(mockApi, 300)
