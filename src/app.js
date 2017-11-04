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

store.dispatch(addExpense({description: "Water Bill"}));
store.dispatch(addExpense({description: "Gas Bill"}));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
