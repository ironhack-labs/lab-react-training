import React from "react";

function IdCard(props){
	return(

		<div className="border">
		<div>
		<img src={props.picture} alt = {props.picture}  className="idImg"/>
		</div>
			<div className="idCardContent">
				<p><strong>First Name:</strong> {props.firstName}</p>
				<p><strong>Last Name:</strong> {props.lastName}</p>
				<p><strong>Gender:</strong> {props.gender}</p>
				<p><strong>Height:</strong> {props.height}</p>
				<p><strong>Birth:</strong> {props.birth.toLocaleString()}</p>
			</div>
		</div>
	)
}

export default IdCard;
