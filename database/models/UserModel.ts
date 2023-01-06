import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  provider: {type: String, required: true},
  displayName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  firebaseId: {type: String, required: true, unique: true},
  photoURL: {type: String},
  dni: { type: String, unique: true},
  passport: { type: String, unique: true},
  name: { type: String },
  lastName: { type: String },
  phone: { type: String },
},{
  timestamps: true
})

const UserModel = mongoose.models?.User || mongoose.model('User', userSchema)
export default UserModel
