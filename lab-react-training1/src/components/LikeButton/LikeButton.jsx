import { useState } from 'react'
import colors from '../../constants'
import getRandom from '../../utils/random'
import './LikeButton.css'

const LikeButton = () => {
	const [count, setCount] = useState(0)
	const [color, setColor] = useState('red')

	const handleLikeCount = () => {
		setCount(count + 1)
	}
	const handleBgColor = () => {
		const newColor = colors[getRandom(0, colors.length - 1)]
		setColor(newColor)
	}

	return (
		<div className='LikeButton'>
			<button
				onClick={() => {
					handleLikeCount(), handleBgColor()
				}}
				style={{ backgroundColor: color }}>
				{count} Likes
			</button>
		</div>
	)
}

export default LikeButton
