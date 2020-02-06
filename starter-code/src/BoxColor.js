import React from 'react'

const BoxColor = ({r, g, b}) => {

    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
      };

    return (
        <div className="box" style={divStyle}>
            
        </div>
    )
    
}

export default BoxColor