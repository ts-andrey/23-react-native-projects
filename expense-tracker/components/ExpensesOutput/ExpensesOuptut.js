import { View } from 'react-native';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
      <ExpensesList />
    </View>
  );
}
