import React from 'react';
import {shallow, mount, render} from 'enzyme';
import ExpenseListItem from '../../components/expense-list-item';
import expenses from '../fixtures/expenses';

test('should render an expense list item', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
  expect(wrapper).toMatchSnapshot();
});
