const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const container = {
        backgroundColor: `${bgColor}`,
        width: '30%',
        borderRadius: '10px',
        color:`${color}`
      };

      const image = {
        marginTop: "15px",
        textAlign: "right",
        marginRight: "15px"
    }

    const cardNumber = {
        textAlign: "center"
    }

    const h2 = {
        textAlign: "left",
        marginLeft: "10px",
        marginBottom: "0px"
    }

    const p = {
        textAlign: "left",
        marginLeft: "10px",
        marginTop: "0px"
    }
    
    

    return <div style={container}>
        <div style={image}>
            {type === 'Visa' ? <img src="./visa.png" width="45px"></img>: <img src="./master-card.svg" width="45px"></img>}
        </div>
        <h2 style={cardNumber}>**** **** **** {number.slice(-4)}</h2>
        <p style={h2}>Expires{expirationMonth}  / {expirationYear.toString().slice(-2)} {bank}</p>
        <p style={p}>{owner}</p>
    </div>
}

export default CreditCard;