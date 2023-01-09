import {useState} from 'react'
import classes from './NewExpense.module.css'
const ExpenseForm = (props) => {
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
  const closeFormHandler = () => {
    props.onCancel()
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
      <form>
        <div className={classes['new-expense__controls']}>
        <div className={classes['new-expense__control']}>
          <label htmlFor="">Item</label>
          <input type="text" onChange = {itemChangeHandler} value={enteredItem}/>
        </div>
        <div className={classes['new-expense__control']}>
          <label htmlFor="">Price</label>
          <input type="number" onChange={priceChangeHandler} value={enteredPrice}/>
        </div>
        <div className={classes['new-expense__control']}>
          <label htmlFor="">Date</label>
          <input type="date" onChange={dateChangeHandler} value={enteredDate}/>
        </div>
        </div>
        <div className={classes.actions}>
        <button onClick={closeFormHandler}>Close</button>
        <button type="submit" onClick={submitHandler}>Add Expense</button>
        </div>
      </form>
  )
}

export default ExpenseForm