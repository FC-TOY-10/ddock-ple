import { Weekly } from 'components/index';
import { createExpense } from '@/apis/Expense';
import { useState } from 'react';
import styled from "styled-components";


export const WeeklyPage = () => {
  const initialUserData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData') || '{}')
    : {};
  const [userData, setUserData] = useState(initialUserData);

  const userId = userData.email;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const exampleExpenseData = {
      amount: 100,
      category: '실험',
      userId,
      date: new Date().toISOString(),
    };

    console.log('보내는 데이터:', exampleExpenseData);

    // API를 통해 새로운 지출 항목 저장
    const response = await createExpense(exampleExpenseData);
    if (response) {
      createExpense(exampleExpenseData);
    }
  };

  return (
    <>
      <Weekly />
      <FormContainer onSubmit={handleSubmit}>
        <SubmitButton type="submit">추가</SubmitButton>
      </FormContainer>
    </>
  );
}

const SubmitButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  width: 100px;
`;
const FormContainer = styled.form`
  display: flex;
  justify-content: center;
`;
