import React from 'react';

function CreditCard(props) {
  const cards = {
    Visa: './img/visa.png',
    'Master Card': './img/master-card.svg',
  };
  function cardImage(card) {
    return cards[card];
  }

  function nardNumber(num) {
    let finalNumbers = '';
    let numArr = [...num].map((num, idx, arr) =>
      idx >= arr.length - 4 ? (finalNumbers += num) : null
    );
    return `•••• •••• •••• ${finalNumbers}`;
  }

  return (
    <div
      style={{
        backgroundColor: `${props.bgColor}`,
        width: '300px',
        height: '140px',
        borderRadius: '12px',
        margin: '0 0.8% 0 0.8%',
        padding: '1.6%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        color: `${props.type === 'Visa' ? 'white' : null}`,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <img src={cardImage(props.type)} style={{ width: '50px' }} />
      </div>
      <div
        style={{
          fontSize: '1.9em',
          textAlign: 'center',
          margin: '20px 0',
        }}
      >
        {nardNumber(props.number)}
      </div>
      <div style={{ flexDirection: 'column' }}>
        Expires {props.expirationMonth}/{props.expirationYear % 2000}{' '}
        {props.bank}
        <br />
        {props.owner}
      </div>
    </div>
  );
}

export default CreditCard;
