import { Dispatch } from 'react'
import { SET_ERROR, SET_ERROR_MESSAGE } from '../actionsTypes/types'

type ActionDoSetError = | { type: typeof SET_ERROR, payload: boolean }
export const doSetError = (error: boolean) => (dispatch: Dispatch<ActionDoSetError>) => {
  dispatch({
    type: SET_ERROR,
    payload: error
  })
}

type ActionDoSetErrorMessage = | { type: typeof SET_ERROR_MESSAGE, payload: string }
export const doSetErrorMessage = (errorMessage: string) => (dispatch: Dispatch<ActionDoSetErrorMessage>) => {
  dispatch({
    type: SET_ERROR_MESSAGE,
    payload: errorMessage
  })
}