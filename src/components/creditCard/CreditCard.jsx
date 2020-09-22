import React from 'react';
import './CreditCard.css';


{/* <CreditCard
type="Visa"
number="0123 4567 8901 8845"
expirationMonth={3}
expirationYear={2021}
bank="BNP"
owner="Maxence Bouret"
bgColor="#11aa99"
color="white"
/>
 */}
class CreditCard extends React.Component {


  typeOfCard () {
    if(this.props.type === "Visa"){
      return <img className="logo" src="../img/visa.png" alt=""/>
    }else{
      return <img src="../img/master-card.svg" alt=""/>
    }

  }
  formatNumber () {
    let number = this.props.number
    let lastFour = number.slice(-4)
    return <h2 style={{color: this.props.color}}>···· ···· ···· {lastFour}</h2>
    
  }

  render() {
    return (
      <div className="card box" style={{backgroundColor : this.props.bgColor, color: this.props.color}}>
        {this.typeOfCard ()}
        {this.formatNumber()}
        <div className="text">
        <p className="expires">
          Expires: {this.props.expirationMonth}/{this.props.expirationYear}
          </p>
          <p className="bank">
          {this.props.bank}

          </p>
         <p className="owner">
           {this.props.owner}

         </p>

        </div>
       
        
       
       
      </div>
    );
  }
}
export default CreditCard;
