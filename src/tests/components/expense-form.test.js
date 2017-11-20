import React from 'react';
import moment from 'moment';
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

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault:() =>{}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
  });
});

test('should set new date onDateChange', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set new value for onFocusChange', () => {
  const now = moment();
  const focused = true;
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toEqual(focused);
});
