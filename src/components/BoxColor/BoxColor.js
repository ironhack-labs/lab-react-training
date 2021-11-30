import React from 'react';

const BoxColor = (props) =>{
 const {r,g,b} = props

 const boxColorDiv = {
     backgroundColor: `rgb(${r},${g},${b})`,
     width:'500px',
     height: '80px',
     border: '1px solid black',
     margin: '12px',

 }
 
 return (
    <div className="BoxColor" style={boxColorDiv}>
        <p>rgb( {r}, {g}, {b} ) </p>
    </div>
    
)

}


export default BoxColor;