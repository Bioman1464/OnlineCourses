import axios from 'axios'

export const BASE_URL = 'https://localhost:8000/'
export const API_URL = BASE_URL + 'api/'

const API = axios.create({
  baseURL: API_URL,
  withCredentials: false
})

export default API
