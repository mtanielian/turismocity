import { AnyAction } from 'redux'
import { SET_BACKGROUND_IMAGE } from '../actions/sliderActions'

const INITIA_STATE = {
  backgroundImage: ''
}

const sliderReducer = (state = INITIA_STATE, action: AnyAction) => {
  switch (action.type) {
  case SET_BACKGROUND_IMAGE:
    return {
      ...state,
      backgroundImage: action.payload
    }
  default:
    return state
  }
}

export default sliderReducer