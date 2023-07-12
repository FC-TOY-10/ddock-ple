import styled from 'styled-components';
import { GoDotFill } from 'react-icons/go';
import { Calendar, ExpenseData } from '@/types';
import { ToggleButton } from './ToggleButton';
import { useStore } from '@/store';
import { deleteExpense } from '@/apis/Expense';

interface DailyExpenseProps {
  dailyExpenses: Calendar[];
  weekIndex: number;
}

export const DailyExpense = ({ dailyExpenses, weekIndex }: DailyExpenseProps) => {
  const removeExpense = useStore((state) => state.removeExpense);
  const updateExpense = useStore((state) => state.updateExpense); 

  const handleDeleteExpense = async (deletedIndex: number, expenseId: string) => {
      await deleteExpense(expenseId);
      removeExpense(weekIndex, deletedIndex);
  };

  const handleUpdateExpense = async (updatedIndex: number, updatedExpense: ExpenseData) => {
    await updateExpense(weekIndex, updatedIndex, updatedExpense);
  };
  
  return (
    <DailyWrapper>
      {dailyExpenses.map((expense: Calendar, index: number) => (
        <DailyContainer key={index}>
          <DateBox>
            <GoDotFill />
            {new Date(expense.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}
          </DateBox>

          <Category>{expense.category}</Category>

          <FlexibleSpace />

          <Amount>{expense.amount.toLocaleString()}원</Amount>

          <ToggleButton 
            index={index} 
            expense={expense} 
            onDeleteExpense={handleDeleteExpense}
            onUpdateExpense={handleUpdateExpense}/>
            
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
