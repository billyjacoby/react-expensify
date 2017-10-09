import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ExpenseDashboardPage from '../components/expense-dashboard-page';
import EditExpensePage from '../components/edit-expense-page';
import AddExpensePage from '../components/add-expense-page';
import HelpPage from '../components/help-page';
import NotFound from '../components/not-found';
import Header from '../components/header'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} exact={true}/>
        <Route path="/edit/:id" component={EditExpensePage} exact={true} />
        <Route path="/help" component={HelpPage} exact={true}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
