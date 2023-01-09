import { useAppSelector, useAppDispatch } from './useRedux'
import { doSetTypeOfTrip } from  '../actions/formFlightActions'
import { ChangeEvent } from 'react'
import { TypeOfTrip } from '../ts-definitions/types'

const useTypeOfTrip = () => {
  const dispatch = useAppDispatch()
  const { typeOfTrip } =  useAppSelector(state => state.formFlight)  
  
  const setTypeOfTrip = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(doSetTypeOfTrip(event.target.value as TypeOfTrip))
  }

  return {
    typeOfTrip,
    setTypeOfTrip
  }
}

export default useTypeOfTrip