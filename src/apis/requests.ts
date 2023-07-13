import { AxiosError } from 'axios'

import { apiInstance } from 'apis/index'
import { IRequestByDate } from 'types/index'

// 차트 주간 조회
export const getWeeklyData = async (params: IRequestByDate) => {
  try {
    const response = await apiInstance.get('/expenses/calendar', { params })
    return response.data
  } catch (error) {
    return error as AxiosError
  }
}

// 주별 소비 조회
export const getWeeklySummary = async () => {
  try {
    const params = {
      period: 'weekly',
      userId: import.meta.env.VITE_USER_ID
    }
    const response = await apiInstance.get('/expenses/summary', { params })
    return response.data
  } catch (error) {
    return error as AxiosError
  }
}
