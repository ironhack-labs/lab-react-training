import "./CreditCard.css"

const CreditCard = (props) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

    const divStyle = {
        backgroundColor: `${bgColor}`,
        width: '30%',
        borderRadius: '10px',
        color:`${color}`
      };

    return <div style={divStyle}>
        <div className="image">
            {type === 'Visa' ? <img src="./visa.png" width="45px"></img>: <img src="./master-card.svg" width="45px"></img>}
        </div>
        <h2 className="number">**** **** **** {number.slice(-4)}</h2>
        {expirationMonth.length < 10 ? <span>Expires 0{expirationMonth}/{expirationYear} {bank}</span> : <span>Expires {expirationMonth}/{expirationYear} {bank}</span>}
        
        <p>{owner}</p>
    </div>
}

export default CreditCard;