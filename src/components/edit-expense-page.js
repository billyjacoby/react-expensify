import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './expense-form';
import {editExpense, removeExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component {
  constructor(props) {
    super(props)
  }

  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  onRemove = (expense) => {
    this.props.removeExpense({id: this.props.expense.id});
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
  editExpense: (expenseId, expense) => dispatch(editExpense(expenseId, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
