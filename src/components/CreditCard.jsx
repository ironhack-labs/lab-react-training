function CreditCard(props) {
  const { type, number, expirationYear, bank, owner, bgColor, color } = props
  const styles = {
    backgroundColor: bgColor, 
    color
  }
  return (
    <div class="CreditCard" style={styles}>
      <div class="type">
      {type.toLowerCase() === 'visa'?  <img src="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/visa.png" width={57} height={20} alt="visa logo png"/>: <img src="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/master-card.svg" width={57} height={20} alt="master logo png"/>}
          </div>
          <div class="number">•••• •••• •••• {number.slice(-4)}</div>
          <div class="expires-bank"><span>Expires {expirationYear} </span><span class="bank">{bank}</span></div>
          <div class="owner">{owner}</div>
          </div>
  )
}

export default CreditCard