import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://backend.toptic.filipemoreno.com.br',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer <token>',
  },
})
