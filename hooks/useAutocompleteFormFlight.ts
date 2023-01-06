import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './useRedux'
import { getFlightsReturn, getFlights } from '../services/flights.services'
import { doSetFlightsOutbound, doSetFlightsReturn, doSetFlightOutbound, doSetFlightReturn } from '../actions/formFlightActions'
import { Flight } from '../ts-definitions/interfaces'
import { TypeFlight } from '../ts-definitions/types'


interface Props {
  type: TypeFlight
}

const useAutocompleteFormFlight = ({ type } :Props ) => {
  const dispatch = useAppDispatch()
  
  const { flightsOutbound,  flightsReturn, flightOutbound, flightReturn } =  useAppSelector(state => state.formFlight)

  const laodFlights = async () => {
    const data: Flight[] = await getFlights()
    dispatch(doSetFlightsOutbound(data))
  }

  const loadFlightsReturn = async () => { 
    doSetFlightsReturn([])
    doSetFlightReturn({})
    if(flightOutbound) {
      const { origin, destination, date } = flightOutbound
      const data = await getFlightsReturn({ origin, destination, date })
      dispatch(doSetFlightsReturn(data))
    }
  }

  useEffect(() => {
    laodFlights()
  }, [])

  useEffect(() => {
    loadFlightsReturn()
  } ,[flightOutbound])

  const setFlight = (flight: Flight) => {
    if (type === 'outbound') {
      dispatch(doSetFlightOutbound(flight))
    }

    if (type === 'return') {
      dispatch(doSetFlightReturn(flight))
    }
  }

  if (type === 'outbound') {
    return {
      flights: flightsOutbound, 
      flight: flightOutbound, 
      setFlight
    }
  }

  return {
    flights: flightsReturn, 
    flight:flightReturn,
    setFlight
  }
  
}

export default useAutocompleteFormFlight