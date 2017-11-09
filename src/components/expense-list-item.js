import React from 'react';
import {Link} from 'react-router-dom';

import {removeExpense} from '../actions/expenses';

const ExpenseListItem = ({description, amount, createdAt, note, id, dispatch}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
    {
      note && <p>Note: {note}</p>
    }
  </div>
);

export default ExpenseListItem;
