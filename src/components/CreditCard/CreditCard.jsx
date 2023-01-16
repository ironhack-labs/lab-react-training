import "./CreditCard.css";

function CreditCard(props) {
    const {type, number, expirationMounth, expirationYear, bank, owner, bgColor, color } = props
    const divStyle = {
        color: `${color}`,
        backgroundColor: `${bgColor}`
      };

  return (
        <div className="credit-card" style={divStyle}>
            <div className="card-type">
                <img src= { type } alt="credit card type"/>
            </div>
            <div className="card-number">
                <span>**** **** **** {number[12]}{number[13]}{number[14]}{number[15]}</span>
            </div>
            <div className="exp-bank-and-owner">
                <div className="exp-and-bank">
                    <p>Expires { expirationMounth }{ expirationYear }</p>
                    <p>{ bank }</p>
                </div>
                <div className="owner">
                    <p>{ owner }</p>
                </div> 
            </div>  
        </div>
  )
}

export default CreditCard;