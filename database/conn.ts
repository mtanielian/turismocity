import mongoose from 'mongoose'

export const connect = async () => {
  try {
    const URI = process.env.MONGO_URI || ''
    await mongoose.connect(URI)
    console.log('Database connected')
  } catch (error) {
    console.log('Error to try connect database ', error)
  }
}

export const disconnect = async () => {
  try {
    await mongoose.disconnect()
    console.log('Database disconnected')
  } catch (error) {
    console.log('Error to try disconnect database ', error)
  }
}