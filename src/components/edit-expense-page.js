import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './expense-form';
import {editExpense, removeExpense} from '../actions/expenses';

const EditExpensePage =  (props) => {
  // console.log(props.expense.description);
  return (
    <div>
      {
        props.expense ?
        <div>
          <ExpenseForm
            expense={props.expense}
            onSubmit={(expense) => {
              props.dispatch(editExpense(props.expense.id, expense));
              props.history.push('/');
              // console.log('updated', expense);
            }}
          />
          <button
            onClick = {() => {
              props.dispatch(removeExpense({id: props.expense.id}));
              props.history.push('/');
            }}
          >Remove</button>
        </div>
        : "Invalid expense id."
      }
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    expense: state.expenses.find((expense) => expense.id === ownProps.match.params.id)
  }
}

export default connect(mapStateToProps)(EditExpensePage);
