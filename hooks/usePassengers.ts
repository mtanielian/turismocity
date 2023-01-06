import { useAppDispatch, useAppSelector } from './useRedux'
import { doSetPassengers } from '../actions/formFlightActions'

type TypePassenger = 'adult' | 'teen' | 'child'

interface Passenger {
  type: TypePassenger,
  value: number
}

const usePassengers = () => {
  const { passengers, totalPassengers } = useAppSelector(state => state.formFlight)
  const dispatch = useAppDispatch()

  const setPassengers = ({type, value}: Passenger) => {
    dispatch(doSetPassengers({...passengers, [type]: value}))
  }

  return {
    passengers, 
    setPassengers, 
    totalPassengers
  }  
}

export default usePassengers