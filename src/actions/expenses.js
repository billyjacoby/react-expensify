import uuid from 'uuid';
import database from '../firebase/firebase';


// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = {description, note, amount, createdAt};

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    });
  }
};

// REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({id} = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({
        id
      }))
    }).catch((e) => {
      console.log('error: ', e);
    })
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// this is how the expenses are set from firebase to redux

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((snapshotChild) => {
        expenses.push({
          id: snapshotChild.key,
          ...snapshotChild.val()
        });
      });

      dispatch(setExpenses(expenses));
    })
  }
}

  // return (dispatch) => {
  //   const expenses = [];
  //
  //   database.ref('expenses').once('value', (snapshot) => {
  //     snapshot.forEach((snapshotChild) => {
  //       expenses.push({
  //         id: snapshotChild.key,
  //         ...snapshotChild
  //       })
  //     })
  //   }, (e) => {
  //     console.log('Error retrieving data:', e);
  //   })
  //
  //     return dispatch(setExpenses(expenses))
  // }
