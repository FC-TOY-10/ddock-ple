import { AiOutlineMenu } from "react-icons/ai";
import styled from 'styled-components';
import { Calendar } from "@/types";

export const WeekSummary = ({ weekExpenses, index, onClick }) => {
  // 주 지출 총액 계산
  const totalAmount = weekExpenses.reduce((acc:number, expense:Calendar) => acc + expense.amount, 0);

  // 주 시작일 계산
  const weekStartDay = 
    new Date(weekExpenses[0].date)
    .toLocaleDateString(undefined, {month: 'long', day: 'numeric'});
    
  // 주 종료일 계산
  const weekEndDay = 
    new Date(weekExpenses[weekExpenses.length - 1].date)
    .toLocaleDateString(undefined, {month: 'long', day: 'numeric'});

  return (
    <WeekContainer key={index} onClick={onClick}>
      <AiOutlineMenu />
      <WeekTitle>{`${weekStartDay} ~ ${weekEndDay} (${index + 1}주차)`}</WeekTitle>
      <TotalAmount>{totalAmount.toLocaleString()}원</TotalAmount>
    </WeekContainer>
  );
};

const WeekContainer = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  align-items: center;
  padding: 30px 0;
  border-bottom: 1px solid #ececec;
`;

const WeekTitle = styled.div`
  font-weight: bold;
  margin-left: 10px;
`;

const TotalAmount = styled.div`
  position: absolute;
  right: 0;
  font-weight: bold;
`;