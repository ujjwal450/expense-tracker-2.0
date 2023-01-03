import ExpenseList from './ExpenseList'
const ExpenseYear = (props) => {
  return(
    <div>
      <div>
        {props.items.year}
      </div>
      <div>
            {props.items.totalItems}
      </div>
      <div>
            {props.items.totalPrice}
      </div>
      <div>
        <ExpenseList items = {props.items}/>
      </div>
    </div>
  )
}

export default ExpenseYear