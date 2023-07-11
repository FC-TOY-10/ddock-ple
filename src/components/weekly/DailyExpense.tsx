import styled from 'styled-components';
import { GoDotFill } from 'react-icons/go';
import { Calendar } from '@/types';
import { ToggleButton } from './ToggleButton';
import { useState, useEffect } from 'react';

export const DailyExpense = ({ dailyExpenses, weekIndex, onDeleteExpense  }) => {
  const [dailyExpense, setDailyExpense] = useState([]);

  useEffect(() => {
    setDailyExpense(dailyExpenses);
  }, [dailyExpenses]);

  const handleDeleteExpense = (deletedIndex: number, expenseId: number) => {
    onDeleteExpense(weekIndex, deletedIndex, expenseId);
  };
  

  return (
    <DailyWrapper>
      {dailyExpense.map((expense: Calendar, index: number) => (
        <DailyContainer key={index}>
          <DateBox>
            <GoDotFill />
            {new Date(expense.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}
          </DateBox>

          <Category>{expense.category}</Category>

          <FlexibleSpace />

          <Amount>-{expense.amount.toLocaleString()}원</Amount>

          <ToggleButton index={index} expense={expense} onDeleteExpense={handleDeleteExpense}/>
        </DailyContainer>
      ))}
    </DailyWrapper>
  );
};

const DailyWrapper = styled.div`
  padding: 10px;
  border: 2px solid black;
`;

const DailyContainer = styled.div`
  display: flex;
  padding: 5px 0;
`;

const DateBox = styled.div`
  display: flex;
  flex-basis: 150px;
`;

const Category = styled.div`
  color: blue;
  font-weight: bold;
`;

const FlexibleSpace = styled.div`
  flex-grow: 1;
`;

const Amount = styled.div`
  font-weight: bold;
`;
