import { doSetFlightsOutbound, doSetFlightsReturn, doSetFlightOutbound, doSetFlightReturn, doSetTypeOfTrip } from '../actions/formFlightActions'
import { useAppDispatch, useAppSelector } from './useRedux'
import { getFlightsReturn, getFlights } from '../services/flights.services'
import { ChangeEvent, useEffect } from 'react'
import { Flight } from '../ts-definitions/interfaces'

const useFormFlight = () => {
  const dispatch = useAppDispatch()
  const { flightsOutbound, flightsReturn, flightOutbound, flightReturn, typeOfTrip } = useAppSelector((state) => state.formFlight)

  const laodFlights = async () => {
    const data = await getFlights()
    dispatch(doSetFlightsOutbound(data))
  }

  const loadFlightsReturn = async () => { 
    dispatch(doSetFlightsReturn([]))
    dispatch(doSetFlightReturn({}))
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

  const setFlightOutbound = (flight: Flight) => {
    dispatch(doSetFlightOutbound(flight))
  }

  const setFlightReturn = (flight: Flight) => {
    dispatch(doSetFlightReturn(flight))
  }

  const handleChangeTypeOfTrip= (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(doSetTypeOfTrip(event.target.value))
    
  }


  return {
    flightsOutbound, 
    flightsReturn, 
    flightOutbound, 
    flightReturn,
    loadFlightsReturn,
    setFlightOutbound,
    setFlightReturn,
    typeOfTrip,
    handleChangeTypeOfTrip
  }

}

export default useFormFlight
