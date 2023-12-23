import { useState } from "react";
import Expenses from "./ExpenseList/Expense.jsx";
import NewExpense from "./NewExpense/NewExpense.jsx";
const App = () => {
  const dummyExpenses = [
    {
      id: "el",
      title: "Food",
      amount: 500,
      date: new Date(2022, 7, 15),
      
    },
    {
      id: "bl",
      title: "Shopping",
      amount: 5000,
      date: new Date(2022, 10, 12),
     
    },
    {
      id: "ml",
      title: "Movie",
      amount: 1000,
      date: new Date(2021, 6, 13),
    },
    {
      id: "cl",
      title: "Tour",
      amount: 20000,
      date: new Date(2020, 4, 12),
   
    },
    {
      id: "xl",
      title: "Dinner",
      amount: 1200,
      date: new Date(2021, 8, 12),
    },
  ];
  const [expenseList, setExpenseList] = useState(dummyExpenses);
  const addExpenseHandler = (expense) => {
    console.log(expense, "in app.js new expenses");
    setExpenseList((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseList} />
    </div>
  );
};

export default App;