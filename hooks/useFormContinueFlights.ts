import { useRouter } from 'next/router'
import { useState } from 'react'
import { useAppSelector } from './useRedux'


const useFormContinueFlights = () => {
  const { flightOutbound, flightReturn, dateOutbound, dateReturn, typeOfTrip, totalPassengers } = useAppSelector(state => state.formFlight)  
  const [error, setError] = useState(false)
  const [errorTitle, setErrorTitle] = useState('')
  const [errorMessage, setErrorMessage] = useState('')


  const router = useRouter()

  const handleContinueFlights = () => {
    if (typeOfTrip === '') {
      setError(true)
      setErrorTitle('Falta información')
      setErrorMessage('Por favor, selecciona el tipo de viaje')
      return
    }

    if (totalPassengers === 0) {
      setError(true)
      setErrorTitle('Falta información')
      setErrorMessage('Por favor, selecciona el número de pasajeros')
      return
    }
    
    const lengthKeysFlightOutbound = Object.keys(flightOutbound).length
    const lengthKeysFlightReturn = Object.keys(flightReturn).length

    if (typeOfTrip === 'dates' && dateOutbound) {
      console.log('flights/completeFlight', {dateOutbound, dateReturn})
      //router.push('flights/completeFlight')
      return
    }

    if (typeOfTrip === 'ida_vuelta') {
      console.log({lengthKeysFlightOutbound, lengthKeysFlightReturn})
      if (lengthKeysFlightOutbound === 0 || lengthKeysFlightReturn === 0) {
        setError(true)
        setErrorTitle('Falta información')
        setErrorMessage('Por favor, selecciona vuelo de ida y vuelta')
        return
      }

      if (lengthKeysFlightOutbound > 0 && lengthKeysFlightReturn > 0) {
        console.log('tickets/sell')
        //router.push('tickets/sell')
        return
      }
    }
    
    if (typeOfTrip === 'solo_ida') {  
      if (lengthKeysFlightOutbound === 0) {
        setError(true)
        setErrorTitle('Falta información')
        setErrorMessage('Por favor, selecciona un vuelo de ida')
        return
      }
      

      if (lengthKeysFlightOutbound > 0) {
        console.log('tickets/sell')
        //router.push('tickets/sell')
        return
      }
    }
        
    


  }
  

  return { handleContinueFlights, setError, error, errorTitle, errorMessage }



}

export default useFormContinueFlights