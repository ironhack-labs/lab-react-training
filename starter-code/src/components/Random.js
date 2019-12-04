import React from "react";

const Random = (props) => {
	return (
		<div>
		<p>Random value between <span>{props.min}</span> and <span>{props.max}</span> => {Math.floor(Math.random()*(props.min + props.max))}</p>
		</div>
		)
};


export default Random;