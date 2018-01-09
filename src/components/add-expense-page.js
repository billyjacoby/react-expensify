import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './expense-form';
import {startAddExpense} from '../actions/expenses';


export class AddExpensePage extends React.Component{
  onSubmit = (expense) => {
    // props.dispatch(addExpense(expense))
    this.props.startAddExpense(expense);
    // the following changes to page without reloading
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        This is from my create page
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
