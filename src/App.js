import './App.css'
import Wrap from './components/expenses/Expense'
import NewExpenses from './components/NewExpenses/NewExpenses'
import Card from './components/UI/Card'

function App() {
	const expenses = [
		{
			id: '1',
			title: 'Toilet Paper',
			amount: '1.5',
			date: new Date(1999, 3, 5),
		},
		{
			id: '2',
			title: 'Apples',
			amount: '3.5',
			date: new Date(2022, 2, 3),
		},
		{
			id: '3',
			title: 'USA',
			amount: '20000000000000000000',
			date: new Date(1776, 6, 4),
		},
		{
			id: '4',
			title: 'weed',
			amount: '800',
			date: new Date(2022, 9, 1),
		},
	]
	return (
		<Card>
			<NewExpenses />
			<Wrap data={expenses} />
		</Card>
	)
}

export default App
