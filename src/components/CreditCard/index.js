import React from 'react'
import styled from 'styled-components'

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const StyledDiv = styled.div`
  background-image: {type === "Visa" ? "url(./img/visa.png)" : "url(/img/master-card.svg)"};
  background-color: {bgColor};
  background-repeat: no-repeat;
  color: {color};
`
  return (
    <StyledDiv>
      <h2>{number}</h2>
      <p>
        Expires: {expirationMonth}/{expirationYear}
      </p>
      <p>{bank}</p>
      <p>{owner}</p>
    </StyledDiv>
  )
}

export default CreditCard
