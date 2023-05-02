
/* eslint-disable react/prop-types */
function IdCard( { lastName, firstName, gender, height, birth, picture } ) {
	birth = birth.toLocaleDateString( 'de' );
	return (
		<div className="id-card">
			<div>
				<img src={picture} alt="photo" />
			</div>
			<div>
				<p><strong>First name: </strong>{firstName}</p>
				<p><strong>Last name: </strong>{lastName}</p>
				<p><strong>Gender: </strong>{gender}</p>
				<p><strong>Height: </strong>{height}</p>
				<p><strong>Birth: </strong>{birth}</p>
			</div>
		</div>
	);
}

export default IdCard;
