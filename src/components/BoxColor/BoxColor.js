import React from "react";

function BoxColor({r,g,b}){
    let style = {
            backgroundColor: `rgb(${r},${g},${b})`,
            width: "400px",
            color:"white",
            textAlign:"center",
            height:"50px",
            margin:"50px",
            border: "1px solid black",
            fontSize: "30px"
    }
    return(
        <div style={style}>rgb{r},{g},{b}</div>
    );
}

export default BoxColor;