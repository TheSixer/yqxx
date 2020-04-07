import { HOME_BANNER } from '../constants/home'

const INITIAL_STATE = {
  banner: []
}

export default function home (state = INITIAL_STATE, action) {
  switch (action.type) {
    case HOME_BANNER: {
      return {
        ...state,
        banner: action.payload.bannerList
      }
    }
    default:
      return state
  }
}
