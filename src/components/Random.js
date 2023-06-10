import React from "react";

function Random(props){

const max = props.max;
const min = props.min;
console.log(max, min)
return(
    
    <div>
<p>Random Value between {min} and {max} = {Math.floor(Math.random()*(max-min))+min} </p>
</div>
);
}

export default Random;
