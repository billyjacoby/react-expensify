import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// Redux stuff
import configureStore from './store/configure-store';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibileExpenses from './selectors/expenses';
// style
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from "./routers/app-router"

const store = configureStore();

// addExpense water bill, gas bill
// setTextFilter
// getVisibileExpense

store.dispatch(addExpense({description: "Water Bill"}));
store.dispatch(addExpense({description: "Gas Bill"}));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
