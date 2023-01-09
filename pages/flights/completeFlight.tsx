import { useAppSelector } from '../../hooks/useRedux'

const completeFlightPage = () => {
  const {flightOutbound, flightReturn,  dateOutbound, dateReturn, typeOfTrip, passengers, totalPassengers } = useAppSelector(state => state.formFlight)
  

  // if typeOfTrip === 'ida_vuelta'
  // if flightOutbound && ! flightReturn => find flightsOutbound and make a list to choose 
  // if dateOutbound && ! dateReturn => find flights base dateOutbound  and make a list to choose

  // if typeOfTrip === 'solo_ida'
  // if flightOutbound  => sell ticket
  // if dateOutbound => find flights base dateOutbound  and make a list to choose and sell ticket


  if (typeOfTrip === 'ida_vuelta') {
    if (flightOutbound && !flightReturn) {
      // find flightsOutbound and make a list to choose 
    }
    if (dateOutbound && !dateReturn) {
      // find flights base dateOutbound  and make a list to choose
    }

    if (dateOutbound && dateReturn) {
      // sell ticket
    }

  }


  if (typeOfTrip === 'solo_ida') {
    if (flightOutbound) {
      // sell ticket
    }
    if (dateOutbound) {
      // List of flights ouboubnd in base of dateOutbound
    }
  }

  


  return (
    <pre>
      {JSON.stringify({ flightOutbound, flightReturn,  dateOutbound, dateReturn, typeOfTrip, passengers, totalPassengers }, null, 2)}
    </pre>
  )
}

export default completeFlightPage