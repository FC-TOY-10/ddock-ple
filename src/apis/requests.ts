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
