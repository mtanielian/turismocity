import api from './api'

export const getFlights = async () => {
  const { data }  = await api.get('/flights/getFlightsOutbound')
  return data.flights
}

export const getFlightsReturn = async ({ origin, destination, date }) => {
  const { data }  = await api.post('/flights/getFlightsReturn', {origin, destination, date})
  return data.flights
}