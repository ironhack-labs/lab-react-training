import Rating from '../Rating/Rating'

import './DriverCard.css'

const DriverCard = ({ name, rating, img, car }) => {
	const { model, licensePlate } = car
	return (
		<>
			<div className='DriverCard'>
				<img src={img} alt={name} />
				<div>
					<h3>{name}</h3>
					<Rating>{rating}</Rating>
					<p>
						{model} - {licensePlate}
					</p>
				</div>
			</div>
		</>
	)
}

export default DriverCard
