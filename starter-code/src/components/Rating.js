import React from "react";

function Rating(props){

	return(
		<div>
			{
				props.children >= 5 
					? <span>★★★★★</span>
					: props.children >= 4
					? <span>★★★★☆</span>
					: props.children >= 3
					? <span>★★★☆☆</span>
					: props.children >= 2
					? <span>★★☆☆☆</span>
					: props.children >= 1
					? <span>★☆☆☆☆</span>
					: props.children === 0
					? <span>☆☆☆☆☆</span>
					: null
			}
		</div>
	)
}

export default Rating;

