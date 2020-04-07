import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import {
  View,
  Image,
} from '@tarojs/components'
import CTitle from '@/components/CTitle'

import './index.styl'

type Props = {
  data: Array<{
    id: number,
    name: string,
    age: number,
    sex: string,
    job: string,
    title: string,
    img: string
  }>
}

class Index extends Component {
  static defaultProps = {
    data: []
  }

  render () {
    const { data } = this.props

    return (
      <View className='recommend'>
        <CTitle
          title='猜你喜欢'
          link='more'
        />
        <View className='recommend-list'>
          {
            data.map((item, index) => (
              <View
                className='recommend-list-item'
                key={index}>
                <Image
                  className='recommend-list-item-img'
                  src={item.img}
                />
              </View>
            ))
          }
        </View>
        <CTitle
          title='最新资讯'
        />
      </View>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index as ComponentClass<Props, {}>
