import './Rating.css'

const Rating = ({ children }) => {
	const getStars = rate => {
		let stars = []
		for (let i = 0; i < 5; i++) {
			if (i < Math.floor(rate)) {
				stars.push('★')
			} else {
				stars.push('☆')
			}
		}
		return stars.join('')
	}
	return (
		<>
			<p className='Rating'>{getStars(children)}</p>
		</>
	)
}

export default Rating
