// import { AnyAction } from 'redux'
import { 
  SET_FLIGHTS_OUTBOUND, SET_FLIGHTS_RETURN, SET_FLIGHT_OUTBOUND, 
  SET_FLIGHT_RETURN, SET_DATE_OUTBBOUND, SET_DATE_RETURN, 
  SET_TYPE_OF_TRIP, SET_PASSENGERS, SET_CONTINUE_FLIGHTS
} from '../actionsTypes/types' 

const INITIAL_STATE = {
  typeOfTrip: '',
  flightsOutbound: [],
  flightsReturn: [],
  flightOutbound: {},
  flightReturn: {},
  dateOutbound: '',
  dateReturn: '',
  passengers: {
    adult: 1,
    teen: 0,
    child: 0
  },
  totalPassengers: 1,
  continueFlights: false
}
const formFlightReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
  case SET_TYPE_OF_TRIP:
    return {...state, typeOfTrip: action.payload}
  case SET_FLIGHTS_OUTBOUND:
    return {...state, flightsOutbound: action.payload}
  case SET_FLIGHTS_RETURN:
    return {...state, flightsReturn: action.payload}  
  case SET_FLIGHT_OUTBOUND:
    return {...state, flightOutbound: action.payload}
  case SET_FLIGHT_RETURN:
    return {...state, flightReturn: action.payload}
  case SET_DATE_OUTBBOUND:
    return {...state, dateOutbound: action.payload}
  case SET_DATE_RETURN:
    return {...state, dateReturn: action.payload}
  case SET_PASSENGERS:
    return {
      ...state, 
      passengers: action.payload, 
      totalPassengers: action.payload.adult + action.payload.teen + action.payload.child
    }
  case SET_CONTINUE_FLIGHTS:
    return {...state, continueFlights: action.payload}
  default:
    return state
  }
}


export default formFlightReducer