import React from 'react';
// import visa from '../img/visa.png';
// import mastercard from '../img/master-card.svg';


const CreditCard = (props) => {
  function fourLastNb(number) {
    let string = String(number);

    let smallString = '';

    for (let i = string.length - 1; i > string.length - 5; i--) {
      smallString += string[i];
    }
    return smallString;
  }

//   function cardLogo(cardType) {
//         switch (cardType) {
//           case 'Visa':
//             return {visa};
//             break;
//           case 'Master Card':
//             return {mastercard};
//             break;
//         }
//   }

  return (
    <div
      style={{
        borderRadius: '20px',
        color: props.color,
        backgroundColor: props.bgColor,
        height:'500px',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center'
      }}
    >
    <img  style={{
display: 'absolute',
      }}
//   src={cardLogo(props.type)}
  alt={props.type}
/>
<div>
<div>
      • • • •     • • • •    • • • •   {fourLastNb(props.number)}
      </div>
      <div>
      Expires {props.expirationMonth}/{props.expirationYear}
      </div>
       <div>
      {props.bank}
      </div>
      {props.owner}
    </div>
    </div>
  );
};

export default CreditCard;
