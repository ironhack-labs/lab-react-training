import React from 'react';
import styled from 'styled-components';
import Visa from '../visa.png';
import MasterCard from '../masterCard.svg';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  function creditCardType(type) {
    if (type === 'Master Card') {
      return MasterCard;
    } else {
      return Visa;
    }
  }

  function creditCardNumber(number) {
    const newNnumber = number.split('').slice(12).join('');
    return `●●●● ●●●● ●●●● ${newNnumber}`;
  }

  creditCardNumber(number);
  return (
    <Credit bgColor={bgColor} color={color}>
      <CardType src={creditCardType(type)} />
      <CreditNumber>{creditCardNumber(number)}</CreditNumber>
      <CardText>
        EXPIRES {expirationMonth}/{expirationYear}
        {'  '} {bank} {'\n'}
      </CardText>
      <CardText>{owner}</CardText>
    </Credit>
  );
}

const Credit = styled.div`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  width: 40rem;
  height: 17rem;
  margin: 0.5rem;
  margin: 0.9rem;
  border-radius: 10px;
`;

const CreditNumber = styled.h1`
  color: ${(props) => props.color};
  text-align: center;
  margin-top: 6rem;
  font-size: 3rem;
`;

const CardType = styled.img`
  width: 3rem;
  float: right;
  margin: 15px;
`;

const CardText = styled.p`
  margin-left: 4rem;
  margin-bottom: 0rem;
  line-height: 5px;
  color: ${(props) => props.color};
`;

export default CreditCard;
