// React libraries
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// React-redux library
import {Provider} from 'react-redux';

// Redux stuff
import configureStore from './store/configure-store';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibileExpenses from './selectors/expenses';

// style
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// routers
import AppRouter from "./routers/app-router"

const store = configureStore();

store.dispatch(addExpense({description: "Water Bill", amount: 4500}));
store.dispatch(addExpense({description: "Gas Bill", createdAt: 1000}));
store.dispatch(addExpense({description: "Rent", amount: 110000}))

const state = store.getState();
const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
console.log(state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
