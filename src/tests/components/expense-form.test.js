import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/expense-form';
import expenses from '../fixtures/expenses';

test('should render expense form correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render expense form with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault:() =>{}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'new description';
  wrapper.find('input').at(0).simulate('change', {target: {value}, } );
  expect(wrapper.state('description')).toEqual(value);
});

test('should set note on textarea change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'new note';
  wrapper.find('textarea').simulate('change', {target: {value}});
  expect(wrapper.state('note')).toEqual(value);
});

test('should set amount to a valid amount', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = '10.00';
  wrapper.find('input').at(1).simulate('change', {target: {value}});
  expect(wrapper.state('amount')).toEqual(value);
});

test('should not set amount to an invalid amount', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'www';
  wrapper.find('input').at(1).simulate('change', {target: {value}});
  expect(wrapper.state('amount')).toEqual('');
});
