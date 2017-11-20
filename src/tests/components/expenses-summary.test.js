import React from 'react';
import { ExpensesSummary } from '../../components/expenses-summary';
import { shallow } from 'enzyme';


test('should render the correct snapshot for no expenses', () => {
  const expenseCount = 0;
  const expensesTotal = 0;
  const wrapper = shallow(<ExpensesSummary
  expenseCount={expenseCount}
  expensesTotal={expensesTotal}
/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render the correct snapshot for one expense', () => {
  const expenseCount = 1;
  const expensesTotal = 9434;
  const wrapper = shallow(<ExpensesSummary
  expenseCount={expenseCount}
  expensesTotal={expensesTotal}
  />);
  expect(wrapper).toMatchSnapshot();
});

test('should render the correct snapshot for two expenses', () => {
  const expenseCount = 2;
  const expensesTotal = 9434;
  const wrapper = shallow(<ExpensesSummary
  expenseCount={expenseCount}
  expensesTotal={expensesTotal}
/>);
  expect(wrapper).toMatchSnapshot();
});
