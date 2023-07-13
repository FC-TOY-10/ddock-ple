import 'moment/locale/ko'
import moment, { Moment } from 'moment'

export const getTodayYearMonth = () => {
  return {
    year: moment().year(),
    month: moment().month() + 1
  }
}

export const getWeekStartDay = () => {
  const startDay = moment().startOf('week')
  return parseInt(startDay.format('D'))
}

export const getWeekEndDay = () => {
  const startDay = moment().startOf('week')
  return parseInt(startDay.day(6).format('D'))
}

export const getPrevWeeklyNumber = () => {
  moment.updateLocale('ko', {
    week: {
      dow: 0
    }
  })
  const startDay = moment().startOf('week').day(-7)
  return startDay.week()
}
