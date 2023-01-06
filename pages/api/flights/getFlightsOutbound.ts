import type { NextApiRequest, NextApiResponse } from 'next'
import { getFlights } from '../../../lib/flight.lib'



export default function (req: NextApiRequest, res: NextApiResponse<object>) {
  switch (req.method) {
  case 'GET':
    getApiFlights(req, res)
    break
  default:
    return res.status(400).json({ name: 'Invalid Method' })
  }
}



const getApiFlights = async (req: NextApiRequest, res: NextApiResponse<object>) => {
  const flights = await getFlights()
  res.status(200).json({flights})
}