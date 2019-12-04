import React from "react";

function Dice(props){
	return(
		<div >
			<img onClick={props.changeDice} src={props.diceState} alt="dice"/>
		</div>
	)

}

export default Dice;
