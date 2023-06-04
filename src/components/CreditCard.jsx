import React from 'react';
import visa from '../assets/images/visa.png'
// import masterCard from '../assets/images/master-card.svg'

function CreditCard(props) {
    console.log(props);
    const backColor = props.bgColor;
    const textColor = props.color;
    const divStyle = {
        backgroundColor: backColor,
        color: textColor
    }

    


    return (
        <div className="creditCard" style={divStyle}>
            <div className="type">
                <h4>{props.type}</h4>
                
            </div>
            <div className="number">
                <h3>{props.number} </h3>
                

            </div>
            <div className="date">
             <h5>Expires {props.expirationMonth}/{props.expirationYear}   {props.bank}</h5>
            </div>
            <div className="owner">
                {props.owner}
            </div>



        </div>


    )
  


}
export default CreditCard;