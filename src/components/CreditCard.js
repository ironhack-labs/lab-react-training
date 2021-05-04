import React from 'react';
import styled from 'styled-components';

class CreditCard extends React.Component {
  render() {
    const {
      type,
      number,
      expirationMonth,
      expirationYear,
      bank,
      owner,
      bgColor,
      color,
    } = this.props;
    const CreditCardDiv = styled.div`
      border-radius: 10px;
      background-color: ${bgColor};
      color: ${color};
      width: 400px;
      height: 200px;
      margin: 30px;
    `;
    const LogoDiv = styled.div`
      display: flex;
      justify-content: flex-end;
    `;
    const LogoImg = styled.img`
      width: 50px;
      margin: 10px;
    `;
    const CardNum = styled.p`
      width: 90%;
      font-size: 40px;
      text-align: center;
      margin: 20px auto;
    `;

    const CardP = styled.p`
      width: 400px;
      text-align: Left;
      margin: 0;
      margin-left: 15px;
      span {
        margin-right: 30px;
      }
    `;

    const renderImg = () => {
      if (type === 'Visa') {
        return (
          <LogoImg src={process.env.PUBLIC_URL + `/img/visa.png`} alt="Visa" />
        );
      } else if (type === 'Master Card') {
        return (
          <LogoImg
            src={process.env.PUBLIC_URL + `/img/master-card.svg`}
            alt="Mastercard"
          />
        );
      }
    };

    return (
      <CreditCardDiv>
        <LogoDiv>{renderImg()}</LogoDiv>
        <CardNum>{`•••• •••• •••• ` + number.slice(12)}</CardNum>
        <CardP>
          Expires{' '}
          <span>
            {expirationMonth}/{expirationYear.toString().slice(2)}
          </span>{' '}
          <span>{bank}</span>
        </CardP>
        <CardP>{owner}</CardP>
      </CreditCardDiv>
    );
  }
}

export default CreditCard;
