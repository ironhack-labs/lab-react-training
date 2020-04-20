import React, { Component } from 'react';

class CreditCard extends Component {

    render(){
        const { type, number, expirationMonth, expirationYear, bank, owner, color, bgColor } = this.props;

        return(
          
            <div clasName="cotainer-card" style={{
              "background": `${bgColor}`,
              "color": `${color}`,
              "padding": "30px",
              "margin": "5px",
              }}>
                <div className="credit-card">
                  <div>
                    {type === "Visa" && <img className="type-img" src="/img/visa.png" alt= "visa" />}
                    {type === "Master Card" && <img className="type-img" src="/img/master-card.svg" alt= "master-card"/>}
                  </div>
                  <p className="number-card">•••• •••• •••• {number.substr(-4)}</p>
                  <div className="data-card">
                    <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
                    <p>{owner}</p>
                  </div>
                </div>
            </div>
           
           
        )
    }
        
}

export default CreditCard;

