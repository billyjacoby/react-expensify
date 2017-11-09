import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './expense-form';
import {addExpense} from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>
    This is from my create page
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense))
        // the following changes to page without reloading
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
