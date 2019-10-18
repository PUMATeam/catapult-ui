import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8888'
})

export function getHosts () {
  return api.get('hosts')
}

export function createHost (host, installHost) {
  return api.post(`hosts?install=${installHost}`, host)
}
