const ExpenseDetails = (props) => {
  return (
    <div className="expense-item__description">
      <h2>{props.LocationOfExpenditure}</h2>
      <div className="expense-item__price">Rs {props.amount}</div>
    </div>
  );
};
export default ExpenseDetails;