import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItems = (props) => {

  const deleteButton = (e) => {

    let item = e.target.parentElement;
    item.remove() 

  }

  const [name, setTitle] = useState(props.name)
  const [amount , setAmount] = useState(props.amount)

  const editButton = (e) =>{
    setTitle("Updated!")
    setAmount("100$")
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{name}</h2>
        <ExpenseDetails
          
          LocationOfExpenditure={props.LocationOfExpenditure}
          amount={amount}
        >   
        </ExpenseDetails>
      </div>

      <button onClick={deleteButton} >Delete Expense</button>
      <button onClick={editButton} > Edit Expense</button>
    </Card>
  );
}

export default ExpenseItems;