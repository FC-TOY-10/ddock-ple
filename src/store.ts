import create from 'zustand';
import { Calendar, ExpenseData } from './types';
import { deleteExpense, updateExpense } from './apis/Expense';

export const useStore = create((set) => ({
  expensesData: [],
  setExpensesData: (expenses: Calendar[]) => {
    set({ expensesData: expenses });
  },
  // 제거
  removeExpense: async (weekIndex: number, expenseIndex: number, expenseId: string) => {
    await deleteExpense(expenseId);
    set((state) => {
      const newExpenses = state.expensesData.map((weekExpenses: Calendar[], index: number) => {
        return index === weekIndex
          ? weekExpenses.filter((_, index: number) => {
              return index !== expenseIndex;
            })
          : weekExpenses;
      });
      return { expensesData: newExpenses };
    });
  },
  // 업데이트
  updateExpense: async (weekIndex: number, expenseIndex: number, updatedExpense: ExpenseData, expenseId: string) => {
    await updateExpense(updatedExpense, expenseId);
    set((state) => {
      const newExpenses = state.expensesData.map((weekExpenses: Calendar[], index: number) => {
        return index === weekIndex
          ? weekExpenses.map((expense, idx) => {
              return idx === expenseIndex ? updatedExpense : expense;
            })
          : weekExpenses;
      });
      return { expensesData: newExpenses };
    });
  },
}));
