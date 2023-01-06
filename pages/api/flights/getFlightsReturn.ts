import type { NextApiRequest, NextApiResponse } from 'next'
import { getFlightsReturn } from '../../../lib/flight.lib'

export default function (req: NextApiRequest, res: NextApiResponse<object>) {
  console.log('hola')
  switch (req.method) {
  case 'POST':
    getApiFlightsReturn(req, res)
    break
  default:
    return res.status(200).json({ name: 'Example' })
  }
}



const getApiFlightsReturn = async (req: NextApiRequest, res: NextApiResponse<object>) => {
  const { origin, destination, date } = req.body
  const flights = await getFlightsReturn({origin, destination, date})
  res.status(200).json({flights})
}