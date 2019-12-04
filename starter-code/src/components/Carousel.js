import React from "react";

function Carousel(props){
	return(
		<div>
		<button onClick={() => props.change("left")}>left</button>
		<img src={props.imgs[props.step]} alt="img"/>	
		<button onClick={() => props.change("right")}>right</button>
		</div>
	)
}

export default Carousel;


