import { AnyAction } from 'redux'
import { SET_ERROR, SET_ERROR_MESSAGE } from '../actionsTypes/types'

const INITIAL_STATE = {
  error: false,
  errorMessage: ''
}

const handleGlobalErrorReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
  case SET_ERROR:
    return {...state, error: action.payload}
  case SET_ERROR_MESSAGE:
    return {...state, errorMessage: action.payload}
  default:
    return state
  }
}


export default handleGlobalErrorReducer