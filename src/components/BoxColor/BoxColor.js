import React from 'react';
import './BoxColor.css';


const BoxColor = (props) => {
  const { r, g, b } = props
  const properties = {backgroundColor: `rgb(${r}, ${g}, ${b})`, width: '650px', height: '150px', border: '2px solid black', margin: '10px 40px', paddingLeft: '20px'}
      return (
        <div style={properties}>
            <p className="boxColor">rgb({r}, {g}, {b})</p>
        </div>
    )
}

export default BoxColor