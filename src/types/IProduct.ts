export interface ExpenseData {
  amount: number;
  userId: string;
  category: string;
  date: string;
}

export interface Calendar extends ExpenseData {
  _id: string;
  __v: number;
}

export interface TotalAmount {
  _id: string;
  totalAmount: number;
}
