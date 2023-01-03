const ExpenseItem = (props) => {
  console.log(props.item)
  return(
    <div>
      <div>
        {props.item.date.toString()}
      </div>
      <div>
        {props.item.itemName}
      </div>
      <div>
        {props.item.price}
      </div>
    </div>
  )
}

export default ExpenseItem
