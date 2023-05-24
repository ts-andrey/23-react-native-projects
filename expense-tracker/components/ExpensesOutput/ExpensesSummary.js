import { View, Text } from 'react-native';

export default function ExpensesSummary({ expenses, expensesPeriod }) {
  const expensesSum = expenses.reduce((sum, expense) => sum + expense.amout, 0);
  return (
    <View>
      <Text>{expensesPeriod}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}
