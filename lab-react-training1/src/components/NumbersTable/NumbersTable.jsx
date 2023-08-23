import './NumbersTable.css'
import { useState } from 'react'

const NumbersTable = ({ limit }) => {
	const content = []
	for (let i = 1; i <= limit; i++) {
		content.push(
			<div key={i} style={{ backgroundColor: i % 2 === 0 ? 'red' : 'white' }}>
				{i}
			</div>
		)
	}

	return <div className='NumbersTable'>{content}</div>
}

export default NumbersTable
