import React, { Component } from 'react'


class CreditCard extends Component{
    yearExpire = (x) =>{
        let year = x.toString();
        return year.substring(year.length - 2)
    }

  monthExpire = (x) => {
    if (x.toString().length === 1) {
      return '0'.concat(x);
    } else {
      return x;
    }
  }
  cardNumber = (x) => {
      return x.substring(x.length - 4 )
  }
  cardType = (x) =>{
     
    if(x === 'Visa'){
        return "https://i.ibb.co/g9Q52Zs/58482363cef1014c0b5e49c1.png"
      }else if (x === 'Master Card'){
        return "https://i.ibb.co/BKJBpN2/58482354cef1014c0b5e49c0.png"
      }
  }
    render(){
        const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = this.props;
        const colorStyle ={
            backgroundColor:  [`${bgColor}`],
            color: [`${color}`]
        }
        return(
            <div className='credit-card' style={colorStyle} >
                <div >
                <img className='img-cc' src={this.cardType(type)}/>
                </div>
                <div>
                <p> **** **** **** {this.cardNumber(number)}</p>
                </div>
                <div>
        <p>Expires {this.monthExpire(expirationMonth)}/{this.yearExpire(expirationYear)}   {bank}</p>
                    <p> {owner} </p>
                </div>
            </div>
        )
    }
}

export default CreditCard; 