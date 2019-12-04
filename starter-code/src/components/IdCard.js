import React from "react";

function IdCard(props){
	return(
		<div>
			<img src={props.picture} alt = {props.picture}/>
			<span>Fisr Name:</span><p>{props.firstName}</p>
			<span>Last Name:</span><p>{props.lastName}</p>
			<span>Gender:</span><p>{props.gender}</p>
			<span>Height:</span><p>{props.height}</p>
			<span>Birth:</span><p>{props.birth.toLocaleString()}</p>
		</div>
	)
}

export default IdCard;
