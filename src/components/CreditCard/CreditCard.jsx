import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

  let route = ""
  if (type === 'Visa') route = './../../images/visa.png'
  else if (type === 'Master Card') route = './../../images/mastercard.png'

  let number2 = "···· ···· ···· " + number.slice(-4)

  let month = expirationMonth.toString()
  if (Number(expirationMonth) < 10) month = '0' + expirationMonth.toString()

  let year = expirationYear.toString().slice(-2)


  return (
    <div className="CreditCard" style={{ background: `${bgColor}`, color: `${color}` }}>
      <img src={route} alt={type} />
      <p className="cardNumber">{number2}</p>
      <div className='cardOwner'>
        <p>Expires: {month}/{year}</p>
        <p> {bank} </p>
      </div>
      <p>{owner}</p>
    </div>
  )
}

export default CreditCard