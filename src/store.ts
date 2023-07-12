import create from 'zustand';

export const useStore = create((set, get) => ({
  expensesData: [],
  setExpensesData: (expenses) => {
    set({ expensesData: expenses });
  },
  removeExpense: (weekIndex, expenseIndex) =>
    set((state) => {
      const newExpenses = state.expensesData.map((weekExpenses, index) =>
        index === weekIndex
          ? weekExpenses.filter((_, index) => index !== expenseIndex)
          : weekExpenses
      );
      return { expensesData: newExpenses };
    }),
  updateExpense: (weekIndex, expenseIndex, updatedExpense) =>
    set((state) => {
      const newExpenses = state.expensesData.map((weekExpenses, index) =>
        index === weekIndex
          ? weekExpenses.map((expense, idx) =>
              idx === expenseIndex ? updatedExpense : expense
            )
          : weekExpenses
      );
      return { expensesData: newExpenses };
    }),
}));
