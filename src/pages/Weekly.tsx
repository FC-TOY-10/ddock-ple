import { useState, useEffect } from 'react';
import { fetchCalendar, deleteExpense } from '@/apis/Expense';
import { WeekSummary,  DailyExpense } from '@/components';
import { calculateWeeklyExpenses, WeeklyExpenses } from '@/utils';
import styled from 'styled-components';

export const Weekly = () => {
  const [weeklyExpenses, setWeeklyExpenses] = useState<WeeklyExpenses>([]);
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      
      const expensesData = await fetchCalendar(currentYear, currentMonth);
      // 가져온 지출 데이터를 주간 지출 데이터로 변환
      setWeeklyExpenses(calculateWeeklyExpenses(expensesData)); 
    };

    fetchData();
  }, []);

  // 주 지출 목록 클릭 시 실행되는 함수
  const handleWeekClick = (weekIndex: number) => {
    // 이미 선택된 주를 다시 클릭하면 선택 해제
    if (selectedWeek === weekIndex) {
      setSelectedWeek(null);
    } else {// 다른 주를 클릭하면 해당 주를 선택
      setSelectedWeek(weekIndex);
    }
  };

  //데이터 수정시 렌더링되는 함수. 상태 관리 라이브러리 사용하면 없앨거임
  const handleDeleteExpense = async (weekIndex: number, expenseIndex: number, expenseId: string) => {
    await deleteExpense(expenseId);
    setWeeklyExpenses((prevWeeklyExpenses) =>
      prevWeeklyExpenses.map((weekExpenses, index) =>
        index === weekIndex
          ? weekExpenses.filter((_, index) => index !== expenseIndex)
          : weekExpenses
      )
    );
  }

  return (
    <Container>
      {weeklyExpenses.map((weekExpenses, weekIndex) => (
        <>
          <WeekSummary
            key={weekIndex}
            weekExpenses={weekExpenses}
            index={weekIndex}
            onClick={() => handleWeekClick(weekIndex)}
          />
          {selectedWeek === weekIndex && (
            <DailyExpense
            dailyExpenses={weekExpenses}
            weekIndex={weekIndex}
            onDeleteExpense={handleDeleteExpense}
           />
          )}
        </>
      ))}
    </Container>
  );
};

const Container = styled.div`
  max-width: 768px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  min-height: calc(100vh - 114px);
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
`;