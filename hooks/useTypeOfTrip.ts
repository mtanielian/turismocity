import { useAppSelector, useAppDispatch } from './useRedux'
import { doSetTypeOfTrip } from  '../actions/formFlightActions'
import { ChangeEvent } from 'react'

const useTypeOfTrip = () => {
  const dispatch = useAppDispatch()
  const { typeOfTrip } =  useAppSelector(state => state.formFlight)  
  
  const setTypeOfTrip = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(doSetTypeOfTrip(event.target.value))
  }
  
  return {
    typeOfTrip,
    setTypeOfTrip
  }
}

export default useTypeOfTrip