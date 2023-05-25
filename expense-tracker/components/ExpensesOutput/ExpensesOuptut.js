import { StyleSheet, View } from 'react-native';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';
import { GlobalStyles } from '../../constants/styles';

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
    date: new Date('2023-05-23'),
  },
  {
    id: 'el4',
    description: 'A salt',
    amount: 0.25,
    date: new Date('2023-05-23'),
  },
  {
    id: 'el5',
    description: 'A not very sharp kitchen knife',
    amount: 5,
    date: new Date('2023-05-23'),
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

export default function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} expensesPeriod={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
