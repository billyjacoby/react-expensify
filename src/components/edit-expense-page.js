import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './expense-form';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component {
  constructor(props) {
    super(props)
  }

  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  onRemove = (expense) => {
    this.props.startRemoveExpense({id: this.props.expense.id});
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        {
          this.props.expense ?
          <div>
            <ExpenseForm
              expense={this.props.expense}
              onSubmit={this.onSubmit}
            />
            <button
              onClick = {this.onRemove}
            >Remove</button>
          </div>
          : "Invalid expense id."
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    expense: state.expenses.find((expense) => expense.id === ownProps.match.params.id)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  startEditExpense: (expenseId, expense) => dispatch(startEditExpense(expenseId, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
