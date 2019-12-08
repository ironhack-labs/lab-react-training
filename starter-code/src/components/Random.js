import React from "react";

function Random (props){
  const {min , max} = props
  const getRandom =  Math.floor(Math.random()*(props.min + props.max)) ;
  return(
    <div className="Random">
      Random vaule between {min} and {max} => {getRandom}
    </div>
  );
}

export default Random; 