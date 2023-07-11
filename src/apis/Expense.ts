import { ExpenseData } from "@/types";

const API_URL = 'http://52.78.195.183:3003/api'

//월간, 주간, 일간 소비량 호출 함수
type Period = 'daily' | 'monthly' | 'weekly';
export const fetchExpense = async (period:Period) => {
  try {
    const response = await fetch(`${API_URL}/expenses/summary?period=${period}&userId=team10`);
    if (!response.ok) {
      throw new Error('Failed to fetch monthly expenses');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

//액수 기입 함수
export const createExpense = async (expenseData:ExpenseData) => {
  try {
    const response = await fetch(`${API_URL}/expenses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expenseData),
    });

    if (!response.ok) {
      throw new Error('Failed to create expense');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

//달력 함수
export const fetchCalendar = async (year:Number, month:Number) => {
  try {
    const response =
     await fetch(`${API_URL}/expenses/calendar?year=${year}&month=${month}&userId=team10`);
    if (!response.ok) {
      throw new Error('Failed to fetch monthly expenses');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// 지출 정보 업데이트 함수
export const updateExpense = async (expenseData: ExpenseData, expenseId: string) => {
  try {
    const response = await fetch(`${API_URL}/expenses/${expenseId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expenseData),
    });
    if (!response.ok) {
      throw new Error('Failed to update expense');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// 지출 정보 삭제 함수
export const deleteExpense = async (expenseId: string) => {
  try {
    const response = await fetch(`${API_URL}/expenses/${expenseId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete expense');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};