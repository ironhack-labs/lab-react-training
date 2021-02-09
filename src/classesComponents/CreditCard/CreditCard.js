import React from 'react';

class CreditCardClass extends React.Component{
  getLogo(type){
    let logo
    if(type === 'Visa'){
      logo = './img/visa.png'
    } else {
      logo = './img/master-card.svg'
    }
    return logo
  }
  getMask(number){
    let masked = '**** **** **** '+number.substr(-4);
    return masked
  }
 
  getExpirationMonth(expirationMonth){
    if(expirationMonth < 10){
      return expirationMonth = '0' + expirationMonth
    }
  }



  render(){
    return(
      <article className='credit-card'
      style={{backgroundColor: this.props.bgColor, color: this.props.color}}>
        <img src={this.getLogo(this.props.type)}></img>
        <div className='cardNumber'>{this.getMask(this.props.number)}</div>
        <span>Expires {this.getExpirationMonth(this.props.expirationMonth)}/{this.props.expirationYear}</span>
        <span> {this.props.bank}</span>
        <div>{this.props.owner}</div>
      </article>
    )
  }
}

export default CreditCardClass