import mongoose from 'mongoose'

const flightSchema = new mongoose.Schema({
  date: { type: String, required: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  price: {type: Number, required: true},
  availability: { type: Number, required: true },
  label: { type: String, required: true }
}, { 
  timestamps: true 
})

const FlightModel = mongoose.models?.Flight || mongoose.model('Flight', flightSchema)
export default FlightModel