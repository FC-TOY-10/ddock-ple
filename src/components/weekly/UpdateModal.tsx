import { Modal } from '../common';
import styled from 'styled-components';
import { useState,FormEvent, ChangeEvent } from 'react';
import { updateExpense } from '@/apis/Expense';
import { Calendar, ExpenseData } from '@/types';

type UpdateModalProps = {
  closeModal: () => void;
  expense: Calendar;
  onUpdate: (updatedExpense: ExpenseData) => void;
};

export const UpdateModal = ({ closeModal, expense, onUpdate }:UpdateModalProps) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 업데이트 데이터
    const updatedExpense = {
      amount: category === '입금' ? parseInt(amount) : -parseInt(amount),
      category,
      userId: 'team10',
      date: expense.date,
    };

    // 응답이 성공적이면 input창을 초기화하고 modal을 닫음
    await updateExpense(updatedExpense, expense._id);
    onUpdate(updatedExpense);
    setAmount('');
    setCategory('');
    closeModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">금액: </label>
        <Input
          type="number"
          id="amount"
          value={amount}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
          placeholder='금액을 입력하세요'
          required
        />
        <label htmlFor="category">카테고리: </label>
        <CategorySelect
          id="category"
          value={category}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
          required
        >
          <option value="">-- 선택하세요 --</option>
          <option value="입금">입금</option>
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
