import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true } )


const ContactModel = mongoose.models?.Contact || mongoose.model('Contact', contactSchema)
export default ContactModel