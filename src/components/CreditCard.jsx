import styled from 'styled-components'
import visaImg from '../assets/images/visa.png'
import mastCardImg from '../assets/images/master-card.svg'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  const dots = '···· ···· ····'
  const lastCardNums = number.slice(-4)
  return (
    <Wrapper bgcolor={bgColor} color={color}>
      {type === 'Visa' ? <img src={visaImg} alt="visa-logo" /> : <img src={mastCardImg} alt="master-card-logo" />}
      <Number>
        <Dots>{dots}</Dots>
        <h1>{lastCardNums}</h1>
      </Number>
      <Details>
        <span>
          Expires {`${expirationMonth}/${expirationYear}`} {bank}
        </span>
        <p>{owner}</p>
      </Details>
    </Wrapper>
  )
}

export default CreditCard

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 200px;
  border-radius: 20px;
  background-color: ${({ bgcolor }) => bgcolor};
  color: ${({ color }) => color};
  img {
    margin-right: 25px;
    align-self: flex-end;
    width: 50px;
  }
`
const Number = styled.span`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`
const Dots = styled.h1`
  margin: 0;
  font-size: 3rem;
`
const Details = styled.div`
  align-self: flex-start;
  margin-left: 25px;
  p {
    margin: 0;
  }
`
