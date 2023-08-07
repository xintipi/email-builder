import api from './axios.config'

export function Get(endpoint, params) {
  return api.get(`${endpoint}`, { ...params })
}

export function Post(endpoint, body, config) {
  return api.post(`${endpoint}`, body, config)
}

export function Put(endpoint, id, body, config) {
  return api.put(`${endpoint}/${id}`, body, config)
}

export function Delete(endpoint, id) {
  return api.delete(`${endpoint}${id ? `/${id}` : ''}`)
}
