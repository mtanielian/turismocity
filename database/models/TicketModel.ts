import mongoose from 'mongoose'

const ticketSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  flightOutbound: { 
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true },
    data: { type: String, required: true},
    origin: { type: String, required: true},
    destination: { type: String, required: true},
    price: { type: String, required: true},
    availability: { type: String, required: true},
    label: { type: String, required: true},
  },
  flightReturn: { 
    defualt: {},
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight', required: true },
    data: { type: String, required: true},
    origin: { type: String, required: true},
    destination: { type: String, required: true},
    price: { type: String, required: true},
    availability: { type: String, required: true},
    label: { type: String, required: true},
  },
  flyDays: { type: Number, required: true },
}, {
  timestamps: true
})


const TicketModel = mongoose.models?.Ticket || mongoose.model('Ticket', ticketSchema)
export default TicketModel

