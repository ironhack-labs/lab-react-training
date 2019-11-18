import React from 'react';
import './credit-card.css';
import visa from '../../img/visa.png';
import master from '../../img/master-card.svg'
class CreditCard extends React.Component {
    render() {
    
        let cardNumberPartOne = this.props.number.substring(0,4);
        let cardNumberPartTwo = this.props.number.substring(4,8);
        let cardNumberPartThree = this.props.number.substring(8,12);
        let cardNumberPartFour = this.props.number.substring(12,16);
        
let arr = cardNumberPartOne.replace(/\d+/g, '••••') + ' ' + cardNumberPartTwo.replace(/\d+/g, '••••') + ' ' + cardNumberPartThree.replace(/\d+/g, '••••') + ' ' + cardNumberPartFour;
let styleName = {backgroundColor: this.props.bgColor} 
let white ={color: 'white'};
let black ={color:'black'}  
let visaImg = visa;
let masterCardImg = master;

        return (
            
<div className="card mb-3 credit-card" style={styleName}>
  <div className="card-header credit-card-header"><img src={this.props.type === 'Visa' ? visaImg : masterCardImg } alt="card type"/></div>
  <div className="card-body credit-card-body" style={this.props.type === 'Visa' ? white:black}>
    <h5 className="card-title">{arr}</h5>
    <br/>
    <div className="owner-content">
       <p className="card-text">Expires {this.props.expirationMonth}/{this.props.expirationYear} <span className="bank">{this.props.bank}</span></p>
       <p className="card-text">{this.props.owner}</p>
    </div>
    
  </div>
</div> 
        );
    }
}
export default CreditCard;