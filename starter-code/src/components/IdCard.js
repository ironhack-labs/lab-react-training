import React from "react";

const IdCard = (props) => {
    return(
        <div className='id-card'>
            <img src={props.picture} alt = {props.picture}/>
			<p>First Name :{props.firstName}</p>
			<p>Last Name: {props.lastName}</p>
			<p>Gender: {props.gender}</p>
			<p>Height: {props.height}</p>
			<p>Birth:{props.birth.toLocaleString()}</p>
        </div>
    )
}
export default IdCard;

