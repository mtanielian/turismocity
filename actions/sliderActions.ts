import { Dispatch } from 'react'

export const SET_BACKGROUND_IMAGE = '[slider] - SET_BACKGROUND_IMAGE'


type Action = | { type: typeof SET_BACKGROUND_IMAGE, payload: string }
export const changeBackgroundImage = (image: string) => (dispacth: Dispatch<Action>) => {
  dispacth({
    type: SET_BACKGROUND_IMAGE,
    payload: image
  })
}