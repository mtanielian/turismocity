import { Dispatch } from 'react'
import { 
  SET_FLIGHTS_OUTBOUND, SET_FLIGHTS_RETURN, SET_FLIGHT_OUTBOUND, 
  SET_FLIGHT_RETURN, SET_DATE_OUTBBOUND, SET_DATE_RETURN, 
  SET_TYPE_OF_TRIP, SET_PASSENGERS
} from '../actionsTypes/types' 
import { Flight } from '../ts-definitions/interfaces'
import { TypeFlight } from '../ts-definitions/types'

type ActionSetFlightsOutbound = | { type: typeof SET_FLIGHTS_OUTBOUND, payload: Flight[] }
export const doSetFlightsOutbound = (flights: Flight[]) => (dispatch: Dispatch<ActionSetFlightsOutbound>) => {
  dispatch({
    type: SET_FLIGHTS_OUTBOUND,
    payload: flights
  })
}

type ActionSetFlightsReturn = | { type: typeof SET_FLIGHTS_RETURN, payload: Flight[] }
export const doSetFlightsReturn = (flights: Flight[]) => (dispatch: Dispatch<ActionSetFlightsReturn>) => {
  dispatch({
    type: SET_FLIGHTS_RETURN,
    payload: flights
  })
}


type ActionSetFlightOutbound = | { type: typeof SET_FLIGHT_OUTBOUND, payload: Flight }
export const doSetFlightOutbound = (flight: Flight) => (dispatch: Dispatch<ActionSetFlightOutbound>) => {
  dispatch({
    type: SET_FLIGHT_OUTBOUND,
    payload: flight
  })
}


type ActionSetFlightReturn = | { type: typeof SET_FLIGHT_RETURN, payload: Flight | object }
export const doSetFlightReturn = (flight: Flight | object)=> (dispatch: Dispatch<ActionSetFlightReturn>) => {
  dispatch({
    type: SET_FLIGHT_RETURN,
    payload: flight
  })
}

type ActionSetTypeOfTrip = | { type: typeof SET_TYPE_OF_TRIP, payload: TypeFlight }
export const doSetTypeOfTrip = (typeOfTrip: TypeFlight) => (dispatch: Dispatch<ActionSetTypeOfTrip>) => {
  dispatch({
    type: SET_TYPE_OF_TRIP,
    payload: typeOfTrip
  })
}


type ActionSetDateOutbound = | { type: typeof SET_DATE_OUTBBOUND, payload: string }
export const doSetDateOutbound = (date: string) => (dispatch: Dispatch<ActionSetDateOutbound>) => {
  dispatch({
    type: SET_DATE_OUTBBOUND,
    payload: date
  })
}


type ActionSetDateReturn = | { type: typeof SET_DATE_RETURN, payload: string }
export const doSetDateReturn = (date: string) => (dispatch: Dispatch<ActionSetDateReturn>) => {
  dispatch({
    type: SET_DATE_RETURN,
    payload: date
  })
}

type ActionSetPassengers = | { type: typeof SET_PASSENGERS, payload: object }
export const doSetPassengers = (passengers: object) => (dispatch: Dispatch<ActionSetPassengers>) => {
  dispatch({
    type: SET_PASSENGERS,
    payload: passengers
  })
}