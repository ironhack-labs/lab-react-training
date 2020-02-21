import React from "react";

const IdCard = (props) => {
    return(
        <div>
            <img src={props.picture} alt = {props.picture}/>
			<p>First Name:</p><p>{props.firstName}</p>
			<p>Last Name:</p><p>{props.lastName}</p>
			<p>Gender:</p><p>{props.gender}</p>
			<p>Height:</p><p>{props.height}</p>
			<p>Birth:</p><p>{props.birth.toLocaleString()}</p>
        </div>
    )
}
export default IdCard;

