import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'el1',
    description: 'A very expensive pencil',
    amount: 200,
    date: new Date('2023-04-09'),
  },
  {
    id: 'el2',
    description: 'A nice shoes',
    amount: 84.35,
    date: new Date('2023-05-20'),
  },
  {
    id: 'el3',
    description: 'A very cheap meat',
    amount: 3.99,
    date: new Date('2023-05-25'),
  },
  {
    id: 'el4',
    description: 'A salt',
    amount: 0.25,
    date: new Date('2023-05-25'),
  },
  {
    id: 'el5',
    description: 'A not very sharp kitchen knife',
    amount: 5,
    date: new Date('2023-05-25'),
  },
  {
    id: 'el6',
    description: 'A very expensive pencil',
    amount: 200,
    date: new Date('2023-03-09'),
  },
  {
    id: 'el7',
    description: 'A nice shoes',
    amount: 84.35,
    date: new Date('2023-02-20'),
  },
  {
    id: 'el8',
    description: 'A very cheap meat',
    amount: 3.99,
    date: new Date('2023-02-23'),
  },
  {
    id: 'el9',
    description: 'A salt',
    amount: 0.25,
    date: new Date('2023-01-23'),
  },
  {
    id: 'el10',
    description: 'A not very sharp kitchen knife',
    amount: 5,
    date: new Date('2023-01-23'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: id => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ id: id, ...action.payload }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(expense => expense.id === action.payload.id);
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
}

export default function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}
