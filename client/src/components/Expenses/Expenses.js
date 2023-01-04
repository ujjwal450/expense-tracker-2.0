import { useState } from "react"
import ExpenseYear from "./ExpenseYear"
import NewExpense from './NewExpense'
const dummyExpensesData = [
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
const Expenses = () => {
  const [expenseData, setExpenseData] = useState(dummyExpensesData)
  const newExpenseHandler = (data) => {
    console.log(data)
    const year = new Date(data.date).getFullYear().toString()
    console.log(expenseData)
    const newExpenseData = [...expenseData]
    let flag = 0
    newExpenseData.forEach((item, i) => {
      if(item.year === year ){
        flag = 1
        item.items = [
          data,
          ...item.items
        ]
      }
      
    })
    if(flag === 0){
        newExpenseData.unshift({year: year, items:[data]})
      }
    console.log(newExpenseData)
    setExpenseData(newExpenseData)
  }
  return(
    <div>
      {expenseData.map((expense) => <ExpenseYear year = {expense.year} items = {expense.items}/>)}
      <NewExpense onAddNewExpense = {newExpenseHandler}/>
    </div>
  )

}

export default Expenses