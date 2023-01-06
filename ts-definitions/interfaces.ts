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