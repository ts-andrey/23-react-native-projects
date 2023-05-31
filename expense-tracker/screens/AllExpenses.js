import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOuptut';
import { ExpensesContext } from '../store/expense-context';

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod={'Total'} />;
}
