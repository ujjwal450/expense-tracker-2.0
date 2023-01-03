import ExpenseItem from "./ExpenseItem"
const ExpenseList = (props) => {
  // console.log(props.items)
  return(
    <div>
      {props.items.map((item)=> {
        return <ExpenseItem item={item}/>
      })}
    </div>
  )
}

export default ExpenseList