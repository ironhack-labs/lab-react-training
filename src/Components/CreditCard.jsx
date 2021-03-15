import React from 'react';
import "../App.css";

function CreditCard(props) {
    return (
        <div className="CreditCard" style={{backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>
          <img src="public/img/`${props.type}` "/>
        </div>
    )
}

export default CreditCard
