import axios from 'axios'

export const api = axios.create({
  // baseURL: 'http://localhost:4000',
  baseURL: 'https://backend.toptic.filipemoreno.com.br',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer <token>',
  },
})
