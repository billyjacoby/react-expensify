import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// style
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import AppRouter from "./routers/app-router"


ReactDOM.render(<AppRouter />, document.getElementById('app'));
