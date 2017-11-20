import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const expensesTotal = 0
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
  const expensesTotal = expenses[1].amount;
  const res = selectExpensesTotal([expenses[1]]);
  expect(res).toBe(expensesTotal);
});

test('should correctly add up multiple expenses', () => {
  const expensesTotal = expenses[0].amount + expenses[1].amount + expenses[2].amount;
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(expensesTotal);
});
