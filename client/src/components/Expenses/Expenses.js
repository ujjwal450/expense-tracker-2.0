import ExpenseYear from "./ExpenseYear"
import NewExpense from './NewExpense'
const Expenses = () => {
  const expensesData = [
    {year: '2022', items: [
      {date: new Date(2022, 1, 23), itemName:'test', price: 1},
      {date: new Date(2022, 1, 23), itemName:'test', price: 2},
      {date: new Date(2022, 1, 23), itemName:'test', price: 3},
  ]},
  {year: '2021', items: [
    {date: new Date(2021, 1, 23), itemName:'test', price: 1},
    {date: new Date(2021, 1, 23), itemName:'test', price: 2},
    {date: new Date(2021, 1, 23), itemName:'test', price: 3},
]},
    
  ]
  return(
    <div>
      {expensesData.map((expense) => <ExpenseYear year = {expense.year} items = {expense.items}/>)}
      {/* <NewExpense/> */}
    </div>
  )

}

export default Expenses