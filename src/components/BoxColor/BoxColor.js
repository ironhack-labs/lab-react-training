import React from "react";

const BoxColor = (props) => {

    // let colorR = Math.floor(Math.random() * 255) + 0;
    // let colorG = Math.floor(Math.random() * 255) + 0;
    // let colorB = Math.floor(Math.random() * 255) + 0;

    let colorR = Math.floor(Math.random() * props.r- props.g) + props.r;
    let colorG = Math.floor(Math.random() * props.r- props.g) + props.r;
    let colorB = Math.floor(Math.random() * props.r- props.g) + props.r;

    const divColor = {
     backgroundColor: `rgb(${colorR}, ${colorG}, ${colorB})`,
   };
 
     return (
        <div className="BoxColor-container">
            <p>{divColor.backgroundColor} </p>
        </div>
     );
 };
 
 export default BoxColor; 