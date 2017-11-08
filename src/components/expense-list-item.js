import React from 'react';

export default ({description, amount, createdAt, note}) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    {
      note && <p>Note: {props.expense.note}</p>
    }
    {/* <button>Delete Expense</button> */}
  </div>
);
