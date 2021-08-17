import React from 'react';

class SingleCreditCard extends React.Component {
  creditCardsArr = [
    {
      type: 'Visa',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png',
      number: '0123456789018845',
      expirationMonth: '3',
      expirationYear: '21',
      bank: 'BNP',
      owner: 'Maxence Bouret',
      bgColor: '#11aa99',
      color: 'white',
    },
    {
      type: 'Master Card',
      image:
        'https://w7.pngwing.com/pngs/924/607/png-transparent-mastercard-credit-card-business-debit-card-logo-mastercard-text-service-orange.png',
      number: '0123456789010995',
      expirationMonth: '3',
      expirationYear: '21',
      bank: 'N26',
      owner: 'Maxence Bouret',
      bgColor: '#eeeeee',
      color: '#222222',
    },
    {
      type: 'Visa',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png',
      number: '0123456789016984',
      expirationMonth: '12',
      expirationYear: '19',
      bank: 'Name of the Bank',
      owner: 'Firstname Lastname',
      bgColor: '#ddbb55',
      color: 'white',
    },
  ];

  convertCardNumber = (cardNo) => {
    return cardNo.replace(/.(?=.{4})/g, '•');
  };

  render() {
    const styleObj = {
      backgroundColor: this.bgColor,
      color: this.color,
    };

    return (
      <>
        {this.creditCardsArr.map((elm) => {
          return (
            <div className="singleCard creditCard" style={styleObj}>
              <img src={elm.image} alt={elm.type} />
              <h2>{this.convertCardNumber(elm.number)}</h2>
              <p>
                {'Expires ' + elm.expirationMonth + '/' + elm.expirationYear}
                <span>{elm.bank}</span>
              </p>
              <p>{elm.owner}</p>
            </div>
          );
        })}
      </>
    );
  }
}

export { SingleCreditCard };
