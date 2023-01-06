import moment from 'moment'
import { connect, disconnect } from '../database/conn'
import FlightModel from '../database/models/FlightModel'
import { serializeResponse } from '../utils/serializeResponse'
import { Flight } from '../ts-definitions/interfaces'

export const getFlights = async () => {
  try {
    await connect()
    const flights: Flight[] = await FlightModel.find().sort({date: 1}).lean()
    await disconnect()
    return serializeResponse(flights)
  } catch (error) {
    await disconnect()
    console.log('Error to try get flights ', error) 
  }
}

export interface PropsGetGoFlightsReturn {
  origin: string
  destination: string
  date: string
}

export const getFlightsReturn = async ({ origin, destination, date }: PropsGetGoFlightsReturn) => {
  try {
    await connect()
    const flights: Flight[] = await FlightModel.find({ 
      date: {$gte: date},
      $where: `this.origin == '${destination}' && this.destination == '${origin}'`  
    }).sort({date: 1}).lean()
    await disconnect()
    return serializeResponse(flights)

  } catch (error) {
    await disconnect()
    console.log('Error to try get flights return ', error)
  }
}


export const getNearsFlights = async () => {
  const date = moment(new Date()).format('YYYY-MM-DD')
  try {
    await connect()
    const flights: Flight[] = await FlightModel.find({ date: { $gte: date }}).sort({date: 1}).limit(16).lean()
    await disconnect()
    return serializeResponse(flights)

  } catch (error) {
    await disconnect()
    console.log('Error to try get nears flights ', error)
  }
}