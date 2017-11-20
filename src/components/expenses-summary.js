import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = (props) =>{
  const expenseWord = props.expenseCount === 1 ? "expense" : "expenses";
  return (
    <div>
      {
        props.expenseCount > 0 ?
        <div>
          <h3>You are viewing {props.expenseCount} {expenseWord} totaling {numeral(props.expensesTotal / 100).format('$0,0.00')}</h3>
        </div> :
        <div>
          <h3>No expenses found!</h3>
        </div>
      }

    </div>
  );
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);
