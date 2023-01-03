import ExpenseList from './ExpenseList'
const ExpenseYear = (props) => {
  let totalItems = Object.keys(props.items).length
  let totalPrice = 0
  
  props.items.forEach((item)=> {
    totalPrice = totalPrice + item.price
  })
  // console.log(props.items)
  return(
    <div>
      <div>
        {props.year}
      </div>
      <div>
            {totalItems}
      </div>
      <div>
            {totalPrice}
      </div>
      <div>
        <ExpenseList items = {props.items}/>
      </div>
    </div>
  )
}

export default ExpenseYear