import React, { Component } from 'react';
{/* <BoxColor r={255} g={0} b={0} /> */}


class CreditCard extends Component {
  render() {

   /*type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white"*/

    const { type,
            number,
            expirationMonth,
            expirationYear,
            bank,
            owner,
            bgColor,
            color} = this.props;

    const divStyle = {
        color: color,
        backgroundColor: bgColor,
        width: 'auto',
        height:'auto'
    };

    let href;

    if(type === 'Visa'){
      href = './img/visa.png';
    }else{
      href = './img/master-card.svg';
    }

    
    const numberCard = '★'.repeat(12) + number.split('').splice(8,0);

    return( 
      <div style={divStyle}>
        <img href={href}></img>

        <p>{numberCard}</p>

        <p>Expires: {expirationYear.this}</p>
        <p>{bank}</p>
        <p>{owner}</p>
      </div>
    );
  }
};


export default CreditCard;