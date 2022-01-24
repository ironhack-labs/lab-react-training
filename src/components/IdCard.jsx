import React from "react";

const IdCard = (props) => {
	console.log(props);
    var birth = props.birth.toDateString()
	return (
		<div className="IdCard">
			<p>LastName: {props.lastName}</p>
            <p>FirstName: {props.firstName}</p>
			<p>Gender : {props.gender}</p>
            <p>Height : {`${props.height.toString().substring(0,1)}.${props.height.toString().substring(1)}m`}</p>
            <p>Birth : {birth}</p>
            <img src={props.picture} alt={props.firstName} />
		</div>
	);
};

export default IdCard;
