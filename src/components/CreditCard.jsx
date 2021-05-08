// import React from 'react';
// import '../App.css';

// function CreditCard(props) {
//   const style = {
//     background: `${props.bgColor}`,
//     // color: `${props.color}`,
//   };

//   const lastDigits = Array.from(`${props.number}`).slice(12);
//   //   const lastDigits = Array.from(`${props.number}`).map(el, i < 12 => {el ="*"});

//   const cardType = `${props.type}`.split(' ').join('-').toLowerCase();

//     let imginfo;
//     if (`${props.type}` == 'Visa') {
//       imginfo = "src="/public/img/visa.png"";
//     //   alt="Visa's logo"";
//     } else {
//       imginfo = "src="/public/img/master-card.svg""
//     //   alt="Master Card's logo"";
//     }

//     console.log(imginfo);

//   return (
//     <div>
//       <img imginfo />
//       <h2>**** **** **** {lastDigits}</h2>
//     </div>
//   );
// }

// export default CreditCard;

import React from 'react';

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const lastFourDigits = number.slice(-4);

  const cardType = {
    Visa: '/img/visa.png',
    'Master Card': '/img/master-card.svg',
  };

  const cardColor = {
    backgroundColor: bgColor,
    color,
  };

  return (
    <div style={cardColor}>
      <img src={cardType[type]}></img>
      <div>
        <p>
          {'*'.repeat(12)} {lastFourDigits}
        </p>
      </div>
      <div>
        <p>
          Expires: {expirationMonth}/{expirationYear - 2000} - {bank}
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
