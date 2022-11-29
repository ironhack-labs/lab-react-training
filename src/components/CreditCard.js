const CreditCard = props => {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
  return (
    <div className='CreditCard'>
      <div style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
        <h2> {type} </h2>
        <h2> {number} </h2>
        <h2>Expires {expirationMonth} </h2>
        <h2> {expirationYear} </h2>
        <h2>{bank} </h2>
        <h2> {owner}</h2>
      </div>
    </div>
  )
}

export default CreditCard;
