// React libraries
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// React-redux library
import {Provider} from 'react-redux';
// Redux stuff
import configureStore from './store/configure-store';
import {startSetExpenses} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibileExpenses from './selectors/expenses';
// style
// import 'react-dates/initialize';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
// routers
import AppRouter from "./routers/app-router"
// firebase
import './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
