import ExpenseItem from "./ExpenseItem"
const ExpenseList = (props) => {
  return(
    <div>
      {/* array.forEach(element => {
        
      }); */}
      <ExpenseItem item = {props.item}/>
    </div>
  )
}

export default ExpenseList