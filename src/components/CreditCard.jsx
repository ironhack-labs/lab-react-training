import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/master-card.png';
import styled from 'styled-components';
import { FlexDiv, P } from './Styles';

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
  const isVisa = (input) => {
    return input === 'Visa' ? visa : masterCard;
  };

  const expiredBlock = (a, b) => {
    return `Expires ${a.toString().padStart(2, '0')}/${b.toString().slice(-2)}`;
  };

  const anonymousNumber = (num) => {
    return `•••• •••• •••• ${num.slice(-4)}`;
  };

  const cardBg = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <CreditCardDiv style={cardBg}>
      <Logo className="logo" src={isVisa(type)} alt="visa" height="20px" />
      <CredNumberP>{anonymousNumber(number)}</CredNumberP>
      <FlexDiv>
        <ExpiredP>{expiredBlock(expirationMonth, expirationYear)}</ExpiredP>
        <P>{bank}</P>
      </FlexDiv>
      <p>{owner}</p>
    </CreditCardDiv>
  );
}
export default CreditCard;

const CreditCardDiv = styled.div`
  width: 345px;
  height: 180px;
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #455eb5;
`;

const ExpiredP = styled(P)`
  margin-right: 75px;
`;

const CredNumberP = styled(P)`
  font-size: 34px;
  padding-top: 30px;
  padding-bottom: 20px;
`;

const Logo = styled.img`
  align-self: flex-end;
`;
