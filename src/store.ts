import create from 'zustand';
import { Calendar, ExpenseData } from './types';

export const useStore = create((set) => ({
  expensesData: [],
  setExpensesData: (expenses: Calendar[]) => {
    set({ expensesData: expenses });
  },
  removeExpense: (weekIndex: number, expenseIndex: number) => {
    set((state) => {
      const newExpenses = state.expensesData.map((weekExpenses:Calendar[], index: number) => {
        return index === weekIndex
          ? weekExpenses.filter((_, index: number) => {
              return index !== expenseIndex;
            })
          : weekExpenses;
      });
      return { expensesData: newExpenses };
    });
  },
  updateExpense: (weekIndex:number, expenseIndex:number, updatedExpense: ExpenseData) => {
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
