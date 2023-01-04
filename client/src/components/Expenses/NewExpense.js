import {useState} from 'react'
const NewExpense = (props) => {
  const [enteredDate, setEnteredDate] = useState('')
  const [enteredItem, setEnteredItem] = useState('')
  const [enteredPrice, setEnteredPrice] = useState('')

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
  }
  const itemChangeHandler = (e) => {
    setEnteredItem(e.target.value)
  }

  const priceChangeHandler = (e) => {
    setEnteredPrice(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    const enteredValues = {
      date: new Date(enteredDate),
      itemName: enteredItem,
      price: Number(enteredPrice)
    }
    props.onAddNewExpense(enteredValues)
    setEnteredDate('')
    setEnteredItem('')
    setEnteredPrice('')
  }
  return(
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Date</label>
          <input type="date" onChange={dateChangeHandler} value={enteredDate}/>
        </div>
        <div>
          <label htmlFor="">Item</label>
          <input type="text" onChange = {itemChangeHandler} value={enteredItem}/>
        </div>
        <div>
          <label htmlFor="">Price</label>
          <input type="number" onChange={priceChangeHandler} value={enteredPrice}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewExpense