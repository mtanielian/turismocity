import { useAppDispatch, useAppSelector } from './useRedux'
import { doSetDateOutbound, doSetDateReturn } from '../actions/formFlightActions'
import { TypeFlight } from '../ts-definitions/types'

interface Props {
  type: TypeFlight
}

const useSelectDateFlight = ({ type }: Props) => {
  const { dateOutbound, dateReturn } = useAppSelector(state => state.formFlight)
  const label = type === 'outbound' ? 'Fecha de ida' : 'Fecha de vuelta'
  const dispatch = useAppDispatch()

  const handleDateChange = (date: string) => {
    if (type === 'outbound') {
      dispatch(doSetDateOutbound(date))
    } else {
      dispatch(doSetDateReturn(date))
    }
  }

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