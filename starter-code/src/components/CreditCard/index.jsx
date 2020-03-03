/* eslint-disable jsx-a11y/alt-text */
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
        width: '18em',
        height:'auto'
    };

    let href;

    if(type === 'Visa'){
      href = './img/visa.png';
    }else{
      href = './img/master-card.svg';
    }

    let month;
    if(Object.values({expirationMonth})[0] < 10){
      month = '0'+(Object.values({expirationMonth})[0].toString());
    }else{
      month = (Object.values({expirationMonth})[0].toString())
    }
    const expire = month +'/'+Object.values({expirationYear})[0].toString()[2]+Object.values({expirationYear})[0].toString()[3]

    console.log((Object.values({expirationYear})[0].toString()[3]))

    const numberCard = '★'.repeat(8) + number.split('').splice(12,4).join(' ');
    
    return( 
      <div style={divStyle}>
        <img href={href}></img>
        <p>{numberCard}</p>
        <p>Expires: {expire}</p>
        <p>{bank}</p>
        <p>{owner}</p>
      </div>
    );
  }
};


export default CreditCard;