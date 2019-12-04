import React from "react";

function Dice(props){
	return(
		<div >
			<img  onClick={props.changeGeaorge} src={
				props.imgChange ? props.img
				: props.imgClicked
			} alt="dice"/>
		</div>
	);
}

export default Dice;
