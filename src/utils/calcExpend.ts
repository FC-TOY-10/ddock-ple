import { ICalendarResponse } from 'types/index'

export const calculateExpend = (list: ICalendarResponse[]) => {
  return list.reduce((acc, cur) => {
    if (cur.amount < 0) {
      acc -= cur.amount
    }
    return acc
  }, 0)
}
