import axios from 'axios'
import router from 'next/router'
import { getSession, signOut } from 'next-auth/react'

const isServer = () => {
  return typeof window === 'undefined'
}

let context = {}
let session = {}

export const setContext = (_context) => {
  context = _context
}

export const setSession = (_session) => {
  session = _session
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

api.interceptors.request.use(async (config) => {
  const bearerToken = !isServer() ? await getSession().accessToken : session.accessToken

  config.headers['Authorization'] = `Bearer ${bearerToken}`

  return config
})

api.interceptors.response.use(
  (response) => {
    return response.data
  },
  async (error) => {
    // Do something with response error
    const { status } = error.response

    if (status === 401) {
      await signOut({ redirect: false })

      if (isServer()) {
        context.res.writeHead(302, { location: '/auth/login' })
        context.res.end()
      } else {
        await router.push('/auth/login')
      }
    }

    // eslint-disable-next-line no-undef
    return Promise.reject(error.response.data)
  }
)

export default api
