import React from 'react';
import {connect} from 'react-redux';

import ExpenseListItem from './expense-list-item';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {
      (
        props.expenses.map((expense) => {
          return (
            <ExpenseListItem {...expense} key={expense.id}/>
          )
        })
      )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
};

export default connect(mapStateToProps)(ExpenseList)
