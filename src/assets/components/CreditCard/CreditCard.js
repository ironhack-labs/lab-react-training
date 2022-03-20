import React, {Component} from 'react';
import visaLogo from '../../images/visa.png';
import masterCardLogo from '../../images/master-card.svg';

class CreditCard extends Component {
  // constructor(props){
  //   super(props);

  // }
  cardLogo = {
    visa: visaLogo,
    'master Card': masterCardLogo 
  }

  render() {
    return (
      <div >
        <div className="credit-card">
        <img src={this.cardLogo} alt="card logo"/>
        </div>
      </div>
    )
  }
}

export default CreditCard;
