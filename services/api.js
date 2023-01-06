import axios from 'axios'

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URI
    })
  }

  get(path) {
    return this.api.get(path)
  }

  post(path, body) {
    return this.api.post(path, body)
  }

}

export default new Api()