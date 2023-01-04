import {useState} from 'react'
import ExpenseList from './ExpenseList'
const ExpenseYear = (props) => {
  const [showExpenseList, setShowExpenseList] = useState(false)
  let totalItems = Object.keys(props.items).length
  let totalPrice = 0
  
  props.items.forEach((item)=> {
    totalPrice = totalPrice + item.price
  })
  // console.log(props.items)
  const showExpenseListHandler = () => {
    console.log("clicked")
    setShowExpenseList((prevState) => {
      return !prevState
    })
    console.log(showExpenseList)
  }
  return(
    <div>
    <div onClick={showExpenseListHandler}>
      <div>
        {props.year}
      </div>
      <div>
            {totalItems}
      </div>
      <div>
            {totalPrice}
      </div>
      {showExpenseList && <ExpenseList items = {props.items}/>}
      
    </div>
    {showExpenseList && <button onClick={showExpenseListHandler}>Close</button>}
    </div>
  )
}

export default ExpenseYear