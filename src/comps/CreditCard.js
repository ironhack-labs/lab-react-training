// imports
import React from 'react';
import styled from 'styled-components';

// import images

//components
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

    //Styled components
    const CreditCardDiv = styled.div`
      border-radius: 10px;
      background-color: ${bgColor};
      width: 500px;
    `;
    const LogoDiv = styled.div`
      display: flex;
      justify-content: flex-end;
    `;
    const LogoImg = styled.img`
      width: 100px;
    `;
    const NumberDiv = styled.div`
      color: ${color};
      display: flex;
      justify-content: center;
      font-size: 40px;
    `;
    const ExpAndBankDiv = styled.div`
      display: flex;
      justify-content: space-around;
      width: 40%;
      color: ${color};
      font-size: 20px;
    `;
    const NameDiv = styled.div`
      color: ${color};
      font-size: 20;
    `;
    const renderImg = () => {
      if (type === 'Visa') {
        return (
          <LogoImg src={process.env.PUBLIC_URL + '/img/visa.png'} alt="Visa" />
        );
      } else if (type === 'Master Card') {
        return (
          <LogoImg
            src={process.env.PUBLIC_URL + '/img/master-card.svg'}
            alt="MasterCard"
          />
        );
      }
    };

    return (
      <CreditCardDiv>
        <LogoDiv>{renderImg()}</LogoDiv>
        <NumberDiv>
          <p>{'•••• •••• ••••' + number.slice(12)}</p>
        </NumberDiv>
        <ExpAndBankDiv>
          <p>
            Expires: {expirationMonth}/{expirationYear}
          </p>
          <p>{bank}</p>
        </ExpAndBankDiv>
        <NameDiv>{owner}</NameDiv>
      </CreditCardDiv>
    );
  }
}

// exports
export default CreditCard;
