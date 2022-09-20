import "./IdCard.css";

const IdCard = ({ picture, firstName, lastName , gender , height, birth }) => {
	return (
		<div className="IdCard">
			<img src={picture} alt="img" />
            <ul>
              <li>FirstName: {firstName}</li>
              <li>LastName: {lastName}</li>
              <li>Gender: {gender}</li> 
              <li>Height: {height}</li> 
              <li>Birth: {birth}</li>    
            </ul>
		</div>
	);
};

export default IdCard;
