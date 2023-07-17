import styled from 'styled-components'
import { GoDotFill } from 'react-icons/go'
import { Calendar } from 'types/index'
import { ToggleButton } from 'components/index'

interface DailyExpenseProps {
  dailyExpenses: Calendar[]
  weekIndex: number
}

export const DailyExpense = ({ dailyExpenses, weekIndex }: DailyExpenseProps) => {
  return (
    <DailyWrapper>
      {/* 각각의 dailyExpenses를 렌더링 */}
      {dailyExpenses.map((expense: Calendar, index: number) => (
        <DailyContainer key={index}>
          {/* 날짜 표시 */}
          <DateBox>
            <GoDotFill />
            {new Date(expense.date).toLocaleDateString(undefined, {
              month: 'long',
              day: 'numeric'
            })}
          </DateBox>
          {/* 카테고리 */}
          <Category>{expense.category}</Category>
          {/* 칸 나누기 */}
          <FlexibleSpace />
          {/* 금액 */}
          <Amount>{expense.amount.toLocaleString()}원</Amount>
          {/* 수정 및 삭제 버튼 */}
          <ToggleButton
            expense={expense}
            weekIndex={weekIndex}
            index={index}
          />
        </DailyContainer>
      ))}
    </DailyWrapper>
  )
}

const DailyWrapper = styled.div`
  padding: 10px;
  border: 2px solid black;
`

const DailyContainer = styled.div`
  display: flex;
  padding: 5px 0;
`

const DateBox = styled.div`
  display: flex;
  flex-basis: 150px;
`

const Category = styled.div`
  color: blue;
  font-weight: bold;
`

const FlexibleSpace = styled.div`
  flex-grow: 1;
`

const Amount = styled.div`
  font-weight: bold;
`
