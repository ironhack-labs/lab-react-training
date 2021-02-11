import React from 'react';

function BoxColor(props) {
    let style = {backgroundColor: `rgb(${props.r},${props.g},${props.b})`};

    return (
        <div className='box'>
        {/* rgb(red-green-blue) is CSS function */}
            <p style={style}>rgb({props.r}, {props.g}, {props.b})</p>
        </div>
    )
}

// function BoxColor({r,g,b}) {
//     const styles = {
//         backgroundColor:`rgb(${r},${g},${b})`,
//         width: 150,
//         height: 200,
//     }
//     return (
//         <div style={styles}>
//             <p> rgb ({r}{g}{b}</p>
//         </div>
//     )
// }

export default BoxColor;