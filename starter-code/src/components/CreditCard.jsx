import React, {Component} from 'react';
import CreditCardComp from './CreditCardComp';

class CreditCard extends Component {
  state = {
    cards: [
      {
        type: 'Visa',
        number: '**************8845',
        expirationMonth: '3',
        expirationYear: '2021',
        bank: 'BNP',
        owner: 'Maxence Bouret',
        bgColor: 'bg-info',
        color: 'text-white',
      },
      {
        type: 'Master Card',
        number: '**************0995',
        expirationMonth: '3',
        expirationYear: '2021',
        bank: 'N26',
        owner: 'Maxence Bouret',
        bgColor: 'bg-light',
        color: 'text-dark',
      },
      {
        type: 'Visa',
        number: '************6984',
        expirationMonth: '12',
        expirationYear: '2019',
        bank: 'Name of the Bank',
        owner: 'Firstname Lastname',
        bgColor: 'bg-warning',
        color: 'text-white',
      },
    ],
  };
  render () {
    return (
      <React.Fragment>
        {this.state.cards.map ((card, index) => {
          return (
            <CreditCardComp
              key={index}
              type={card.type}
              number={card.number}
              expirationMonth={card.expirationMonth}
              expirationYear={card.expirationYear}
              bank={card.bank}
              owner={card.owner}
              bgColor={card.bgColor}
              color={card.color}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default CreditCard;
