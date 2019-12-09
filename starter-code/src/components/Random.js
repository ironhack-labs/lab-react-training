import React from "react";

function Random(props){
    const random = Math.floor(Math.random()* (props.max - props.min) + props.min);
	return(

            <div className="card">
                <p>Random value between {props.max} and {props.min} => {random} </p>
            </div>
		
	)
}

export default Random;