const CreditCard = (props) => {
    const {type, number, expirationMounth, expirationYear, bank, owner, bgColor, color } = props

    const divStyle = {
        color: `${color}`,
        backgroundColor: `${bgColor}`
      };

  return (
    <div className="CreditCard">
        <div style={divStyle}/>
            <img src= { type } alt=""/>
            
            <span>**** **** **** {number[12]}{number[13]}{number[14]}{number[15]}</span>
            <p>Expires { expirationMounth }{ expirationYear }{ bank }</p>
            <p>{ owner }</p>
        </div>

    
  )
}

export default CreditCard