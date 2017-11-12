import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {ExpenseList} from '../../components/expense-list';
import expenses from '../fixtures/expenses';

test('should render exppense list with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render expense list with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
});
