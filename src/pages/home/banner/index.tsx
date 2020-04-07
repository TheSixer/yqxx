import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import {
  View,
  Image,
  Swiper,
  SwiperItem
} from '@tarojs/components'

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
      <Swiper
        className='swiper'
        indicatorColor='#FFFFFF'
        indicatorActiveColor='orange'
        indicatorDots
        circular
        autoplay>
        {
          data.map((item, index) => (
            <SwiperItem
              key={index}
              className='banner-img'
              style={{backgroundImage: `url(${item.img})`}}>
            </SwiperItem>
          ))
        }
      </Swiper>
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
