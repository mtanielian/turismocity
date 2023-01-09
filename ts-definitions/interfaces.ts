import { TypeOfTrip } from './types'

export interface Flight {
  _id: string,
  origin: string,
  destination: string,
  date: string,
  price: number,
  availability: number,
  label: string,
}

export interface MenuItems {
  label: string,
  Icon: JSX.Element,
  link?: string,
}


export interface Trip  {
  label: string,
  value: TypeOfTrip
}
