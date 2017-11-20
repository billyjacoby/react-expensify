export default (expenses) => {
  return expenses.reduce((accumlator, currentValue) => accumlator + currentValue.amount, 0)
};
