import React from 'react';
import visa from '../assets/images/visa.png'
//import masterCard from '../assets/images/master-card.svg'

function CreditCard(props) {
    
    const backColor = props.bgColor;
    const textColor = props.color;
    const divStyle = {
        backgroundColor: backColor,
        color: textColor
    }
    const lastFour = props.number.slice(12)
    const credNumber = '**** **** **** ' + lastFour;
    
    const logo = ((elem) => {
        if (elem === "Visa") {
            return <img src={visa} alt={props.owner}/>
            
        } else {
            return "MasterCard"
        }
    })
    


    return (
        <div className="creditCard" style={divStyle}>
            <div className="type">
                
                {logo(props.type)}
                
            </div>
            <div className="number">
                <h3>{credNumber} </h3>
                

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