import React from "react";

function IdCard(props) {

    return (
        <div>
<img src={props.picture} />
<h2>First Name:{props.firstName}</h2>
<h2>Last Name: {props.lastName}</h2>
    <h3>Gender: {props.gender}</h3>
    <h3>Height: {props.height}</h3>
    <h3>birth: {props.birth.getFullYear()}</h3> 
</div>
)
}

export default IdCard;