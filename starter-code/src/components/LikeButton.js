import React from "react";


function LikeButton(props){
	
	return(

		<div >
			<button onClick={props.increment}> {props.count} Likes</button>
		</div>


	);
}


export default LikeButton;


