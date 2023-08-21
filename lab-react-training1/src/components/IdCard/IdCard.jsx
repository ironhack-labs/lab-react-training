import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
	return (
		<>
			<article className='Student frame'>
				<img src={picture} alt={firstName} />
				<ul>
					<li>
						<strong>First name: </strong>
						{firstName}
					</li>
					<li>
						<strong>Last name: </strong>
						{lastName}
					</li>
					<li>
						<strong>Gender: </strong>
						{gender}
					</li>
					<li>
						<strong>Height: </strong>
						{height}
					</li>
					<li>
						<strong>Birth: </strong>
						{birth.toDateString()}
					</li>
				</ul>
			</article>
		</>
	)
}

export default IdCard
