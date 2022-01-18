import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = () => {
/* 	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('') */
// -------------------------------------------------

const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
})
/*     const inputChangeHandler = (event) => {
        const currentInput = event.target.name;
        if(currentInput === 'title'){
            setTitle(event.target.value)
        }else if(currentInput === 'amount'){
            setAmount(event.target.value)
        }else if(currentInput === 'date'){
            setDate(event.target.value)
        }
    } */
    // version obj 2
/*     const inputChangeHandler = (event) => {
        const currentInput = event.target.name;
        setUserInput({
            ...userInput,
            [currentInput] : event.target.value,
        })
    } */
// veersion obj 1
 	const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            title: event.target.value
        })
    }

    
	const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            amount: event.target.value
        })    
    }

    const dateChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            date: event.target.value
        })
    } 

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(userInput);
        // console.log(title);
        // console.log(amount);
        // console.log(date);
    }

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input name='title' type='text' onChange={titleChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input name='amount' type='number' min='0.1' step='1' onChange={amountChangeHandler}/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input name='date' type='date' min='2022-01-01'  onChange={dateChangeHandler}/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	)
}
export default ExpenseForm
