import axios from 'axios'
import { AxiosError } from 'axios'
import moment from 'moment'

import { apiInstance } from 'apis/index'
import { getUserData } from 'utils/index'
import { IRequestByDate, ISearchQuery, ExpenseData } from 'types/index'

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
      userId: getUserData()?.email ?? ''
    }
    const response = await apiInstance.get('api/expenses/summary', { params })
    return response.data
  } catch (error) {
    return error as AxiosError
  }
}

// 검색
export const searchByDateCategory = async (searchQuery: ISearchQuery) => {
  try {
    const requests = searchQuery.categories.map(category => {
      const params = {
        q: category,
        userId: getUserData()?.email ?? ''
      }
      return apiInstance.get('/expenses/search', { params })
    })
    const response = await axios.all(requests).then(
      axios.spread((...response) => {
        const allResult = [] as ExpenseData[]

        response.map(res => allResult.push(...(res.data as ExpenseData[])))

        // 날짜 필터링
        return allResult.filter(data => {
          if (searchQuery.startDate !== '') {
            return (
              moment(data.date) >= moment(searchQuery.startDate) &&
              moment(data.date) <= moment(searchQuery.endDate)
            )
          } else {
            console.log(moment(data.date).date(), moment(searchQuery.endDate).date())
            return moment(data.date).date() <= moment(searchQuery.endDate).date()
          }
        })
      })
    )
    return response
  } catch (error) {
    return error as AxiosError
  }
}
