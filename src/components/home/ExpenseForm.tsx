import { useState } from 'react';
import { createExpense } from '@/apis/Expense';

export const ExpenseForm = ({ onAddExpense }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  //폼 제출 함수
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newExpense = {
      amount: parseInt(amount),
      category,
      userId: 'team10',
      date: new Date().toISOString(),
    };

    // API를 통해 새로운 지출 항목 저장
    const response = await createExpense(newExpense);
    if (response) {
      onAddExpense(newExpense);
      setAmount('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount">금액: </label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <label htmlFor="category">카테고리: </label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <button type="submit">추가</button>
    </form>
  );
};
