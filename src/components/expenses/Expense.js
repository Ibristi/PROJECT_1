import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'
import Card from '../UI/Card'

function Wrap(props) {
	return (
		<Card className='expenses'>
			{props.data.map((el) => {
				return (
					<ExpenseItem
						key={Math.random()}
						title={el.title}
						amount={el.amount}
						date={el.date}
					/>  
				)
			})}
		</Card>
	)
}

export default Wrap
