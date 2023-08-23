import React from "react";

function Random ({min, max}) {
const randomValue = Math.floor(Math.random() * (max - min +1)) + min

return <div>Random number between {min} and {max} is {randomValue} </div>
}

export default Random