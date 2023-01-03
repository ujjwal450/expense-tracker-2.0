const ExpenseItem = (props) => {
  return(
    <div>
      <div>
        {props.item.date}
      </div>
      <div>
        {props.item.name}
      </div>
      <div>
        {props.item.price}
      </div>
    </div>
  )
}

export default ExpenseItem
