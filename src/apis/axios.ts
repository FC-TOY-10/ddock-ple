import axios from 'axios'
import qs from 'query-string'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export const api = axios

export const apiInstance = axios.create()
apiInstance.defaults.paramsSerializer = params => qs.stringify(params)
