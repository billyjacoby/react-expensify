import React from 'react';

import ExpenseList from './expense-list';
import ExpenseListFilters from './expense-list-filters';
import ExpensesSummary from './expenses-summary';

const ExpenseDashboardPage = () => (
  <div>
    <ExpenseListFilters />
    <ExpensesSummary />
    <ExpenseList/>
  </div>
);

export default ExpenseDashboardPage;
