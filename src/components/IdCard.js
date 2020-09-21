import React from 'react';

function IdCard(props) {
return (
<div>
<img src={props.picture} alt=""/>
<p>Last name: {props.lastName} </p>
<p>First name: {props.firstName} </p>
<p>Gender: {props.gender} </p>
<p>Height: {props.height} </p>
<p>Birth:{props.birth.toDateString()} </p>

</div>
)
};

export default IdCard; 