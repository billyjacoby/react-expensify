import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './expense-form';
import {addExpense} from '../actions/expenses';


export class AddExpensePage extends React.Component{
  onSubmit = (expense) => {
    // props.dispatch(addExpense(expense))
    this.props.addExpense(expense);
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
  addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
