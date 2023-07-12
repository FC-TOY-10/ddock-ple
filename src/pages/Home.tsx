import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { HomeModal, Spinner, ExpenseForm } from 'components/index';
import { fetchExpense } from '@/apis/Expense';
import { TotalAmount, ExpenseData } from '@/types';

//숫자를 문자로 변환. 1000을 1,000 으로 출력
const formatDate = (value: number) => value.toLocaleString();

// 로컬 스토리지에서 목표 금액을 가져옴
const useSavedGoal = () => {
  const storedGoal = localStorage.getItem('goal');
  return storedGoal ? Number(storedGoal) : 0;
};

export const Home = () => {
  const initialGoal = useSavedGoal();

  const [showModal, setShowModal] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [goal, setGoal] = useState(initialGoal);

  // 금액과 목표 변경시 spinner 업데이트
  useEffect(() => {
    updateProgress(totalAmount);
  }, [goal, totalAmount]);

  // 월간 소비 데이터 가져오기
  useEffect(() => {
    fetchMonthlyExpense();
  }, []);

  // 월간 소비 데이터를 가져오는 함수
  const fetchMonthlyExpense = async () => {
    const data = await fetchExpense('monthly');
    const sortedData = data.sort((a: TotalAmount, b: TotalAmount) => b._id.localeCompare(a._id));
    const latestTotalAmount = sortedData[0].totalAmount;
    setTotalAmount(latestTotalAmount);
    updateProgress(latestTotalAmount);
  };

  // 지출 추가 이벤트 처리 함수
  const handleAddExpense = (expense: ExpenseData) => {
    const newTotalAmount = totalAmount + expense.amount;
    setTotalAmount(newTotalAmount);
    updateProgress(newTotalAmount);
  };

  // spinner 계산용 함수
  const updateProgress = (newTotalAmount: number) => {
    const percent = (newTotalAmount / goal) * 100;
    setProgress(parseFloat(Math.min(percent, 100).toFixed(2)));
  };

  // 소비계산 설정(모달) 변경 함수
  const handleSetGoal = (goalAmount: number) => {
    localStorage.setItem('goal', goalAmount.toString());
    setGoal(goalAmount);
    setShowModal(false);
  };

  return (
    <Container>
      <Title>똑플</Title>
      <Line />
      <SubTitle>이번 달 소비</SubTitle>
      <Spinner progress={progress} text={totalAmount ? formatDate(totalAmount) : '0'} />
      <Button onClick={() => setShowModal(true)}>소비계산 설정</Button>
      {showModal && (
        <HomeModal setGoal={handleSetGoal} closeModal={() => setShowModal(false)} />
      )}
      <ExpenseForm onAddExpense={handleAddExpense} />
    </Container>
  );
};


const Container = styled.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  height: calc(100vh - 114px);
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #7A2AF2;
  color: white;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-top: 30px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
  margin-top: 30px;
`;

const SubTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  margin-top: 100px;
`;

const Button = styled.button`
  background-color: #A68BFC;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 50px;
`;
