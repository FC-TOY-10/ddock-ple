import { Modal } from '../common';
import styled from 'styled-components';
import { useState } from 'react';
import { updateExpense } from '@/apis/Expense';

export const UpdateModal = ({ closeModal, expense }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 업데이트 데이터
    const updatedExpense = {
      amount: parseInt(amount),
      category,
      userId: 'team10',
      date: expense.date,
    };

    // 응답이 성공적이면 상태를 초기화하고 모달을 닫음
    const response = await updateExpense(updatedExpense, expense._id);
    if (response) {
      setAmount('');
      setCategory('');
      closeModal();
    }
  };

  return (
    <Modal closeModal={closeModal}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">금액: </label>
        <Input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <label htmlFor="category">카테고리: </label>
        <CategorySelect
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">-- 선택하세요 --</option>
          <option value="식비">식비</option>
          <option value="교통비">교통비</option>
          <option value="쇼핑">쇼핑</option>
          <option value="의료">의료</option>
          <option value="공과금">공과금</option>
          <option value="여가">여가</option>
          <option value="기타">기타</option>
        </CategorySelect>
        <button type="submit">수정</button>
      </form>
    </Modal>
  );
};

const Input = styled.input`
  padding: 8px;
  margin-top: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
`;

const CategorySelect = styled.select`
  padding: 8px;
  margin-top: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
`;