import './CreditCard.css'

const CreditCard = props => {


  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props



  return (
    <div className='CreditCard' style={{ backgroundColor: `${bgColor}`, color: `${color}` }} >
      <p>{type}</p>
      <p>•••• •••• •••• {number[12]}{number[13]}{number[14]}{number[15]}</p>
      <p>{expirationMonth}/{expirationYear} <span>{bank}</span></p>
      <p>{owner}</p>
    </div >
  )


}

export default CreditCard