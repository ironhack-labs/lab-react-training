import React from 'react'
import styled from 'styled-components'

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
    } = this.props

    //Styled components
    const CreditCardDiv = styled.div`
      border-radius: 10px;
      background-color: ${bgColor};
      max-width: 400px;
      margin: 0 auto;
      color: ${color};
    `
    const logoDiv = styled.div`
      heigth: 150px;
    `
    const LogoImg = styled.img`
      width: 100px;
    `
    const NumberDiv = styled.div`
      font-size: 20px;
    `
    const ExpAndBankDiv = styled.div`
    diplay: flex;
    justify-content: space-around;
    width: 40%;
    color: ${color};
    font-size: 20px;
    `

    const renderImage = () => {
      if (type === 'Visa') {
        return (
          <LogoImg src={process.env.PUBLIC_URL + '/img/visa.png'} alt="Visa" />
        )
      } else if (type === 'Master Card') {
        return (
          <LogoImg
            src={process.env.PUBLIC_URL + '/img/master-card.svg'}
            alt="MasterCard"
          />
        )
      }
    }

    return (
      <CreditCardDiv>
        <logoDiv>{renderImage()}</logoDiv>
        <NumberDiv>
          <p>{'∙∙∙∙ ∙∙∙∙ ∙∙∙∙' + number.slice(12)}</p>
        </NumberDiv>
        <ExpAndBankDiv>
          <p>
            Expires {expirationMonth}/{expirationYear} {bank}
          </p>
          <p>{owner}</p>
        </ExpAndBankDiv>
      </CreditCardDiv>
    )
  }
}

export default CreditCard
