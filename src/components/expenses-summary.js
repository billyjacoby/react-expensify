import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
  <div>
    {
      props.expenseCount > 0 ?
      <div>
        <h3>Expenses Summary</h3>
        <p>You are viewing {props.expenseCount} {props.expenseCount === 1 ? "expense" : "expenses"} totaling {numeral(props.expensesTotal / 100).format('$0,0.00')}</p>
      </div> :
      <div>
        <p>No expenses found!</p>
      </div>
    }

  </div>
);

const mapStateToProps = (state) => ({
  expenseCount: selectExpenses(state.expenses, state.filters).length,
  expensesTotal: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);
