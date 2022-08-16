function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props
    
    return (
    <div style={{color: `${color}`, background: `${bgColor}` }}>
    <p> {type}</p>
    <p> {number}</p>
    <p> {expirationMonth}</p>
    <p> {expirationYear}</p>
    <p> {bank}</p>
    <p> {owner}</p>
    </div>
  )
}

export default CreditCard