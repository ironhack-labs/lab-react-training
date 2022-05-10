function CreditCard(props){
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props
    
    const style = {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        width: "550px",
        margin: "5px 10px",
        "border-radius": "30px"
    }

    return(
        <div className="bankCard" style={style}>
            <p>{type}</p>
            <p>{number}</p>
            <p>Expires {expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard