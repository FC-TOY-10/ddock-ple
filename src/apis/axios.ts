import axios from 'axios'
import qs from 'query-string'

axios.defaults.baseURL = 'http://52.78.195.183:3003/api/'

export const api = axios

export const apiInstance = axios.create()
apiInstance.defaults.paramsSerializer = params => qs.stringify(params)
