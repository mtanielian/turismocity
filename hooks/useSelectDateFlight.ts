import { useAppDispatch, useAppSelector } from './useRedux'
import { doSetDateOutbound, doSetDateReturn, doSetFlightReturn, doSetFlightOutbound } from '../actions/formFlightActions'
import { TypeFlight } from '../ts-definitions/types'
import { useEffect } from 'react'

interface Props {
  type: TypeFlight
}

const useSelectDateFlight = ({ type }: Props) => {
  const { dateOutbound, dateReturn } = useAppSelector(state => state.formFlight)
  const label = type === 'outbound' ? 'Fecha de ida' : 'Fecha de vuelta'
  const dispatch = useAppDispatch()

  const handleDateChange = (date: string) => {
    dispatch(doSetFlightReturn({}))
    dispatch(doSetFlightOutbound({}))
    doSetFlightOutbound
    if (type === 'outbound') {
      dispatch(doSetDateOutbound(date))
    } else {
      dispatch(doSetDateReturn(date))
    }
  }


  useEffect(() => {

    return () => {
      dispatch(doSetDateOutbound(''))
      dispatch(doSetDateReturn(''))
    }

  }, [])


  if (type === 'outbound') {
    return {
      label,
      date: dateOutbound,
      handleDateChange 
    }
  }
  
  return {
    label, 
    date: dateReturn,
    handleDateChange 
  }
}

export default useSelectDateFlight