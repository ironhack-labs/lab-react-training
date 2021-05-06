import React from 'react';


 function BoxColor(props) {
    const style = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`
    }

    return (
        <div className="box-color-card" style={style}>
        <p>rgb({props.r},{props.g},{props.b})</p>
        </div>
    )
}


export default BoxColor


//How to do the bonus of this iteration? 'display the hex values of the color (ex: #ff0000 for red).'