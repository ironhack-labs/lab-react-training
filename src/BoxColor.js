import React from 'react';
import PropTypes from 'prop-types';



// PROPS IS AN OBJECTS
function BoxColor({ r, g, b }) {
    // eslint-disable-next-line react/prop-types
    const divStyle = {
        backgroundColor: `rgb(${ r }, ${ g }, ${ b })` ,
    };

     return (
        <>
             <div style={divStyle}>
                rgb({r}, {g}, {b})
            </div>
        </>
    )
}


//this is very good practise - senior level
//propTypes lowercase and then uppercase
BoxColor.propTypes = {
    r: PropTypes.number,
    g: PropTypes.number,
    b: PropTypes.number,
   
}


export default BoxColor;