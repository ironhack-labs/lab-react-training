import React from 'react'

function BoxColor(props) {
    //  let R=props.r;
    //  let G=props.g;
    // let B=props.b;
    // console.log("ici"+R,G,B)
     const divStyle = {
        // backgroundColor: rgb(R,G,B),
          border: "1px solid black"
       };
    console.log(props.r)
    return (
         <div style={divStyle}>
            rgb({props.r},{props.g},{props.b})
            
        </div>
        
    )
}

export default BoxColor
