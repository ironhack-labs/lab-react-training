import React from "react"
import PropTypes from "prop-types";

function BoxColor ({r, g, b}){
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
      };
    return(
        <div className="box-color" style={divStyle}>rgb ({r},{g},{b})</div>
    )
}

BoxColor.propTypes = {
    r: PropTypes.number,
    g: PropTypes.number,
    b: PropTypes.number
}

export default BoxColor