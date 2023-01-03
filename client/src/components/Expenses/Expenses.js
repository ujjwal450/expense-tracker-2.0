import ExpenseYear from "./ExpenseYear"
const Expenses = () => {
  const expenses = [
    {date: new Date(2022, 1, 23), itemName:'test', price: '1'},
    {date: new Date(2021, 1, 23), itemName:'test', price: '1'},
    {date: new Date(2021, 1, 23), itemName:'test', price: '1'},
  ]
  return(
    <div>
      <ExpenseYear/>
    </div>
  )

}

export default Expenses