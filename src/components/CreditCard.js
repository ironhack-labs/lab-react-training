function CreditCard(props){
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props

    const StyleMasterCard = {
        backgroundColor: `${bgColor}`,
        borderRadius: "25px",
        padding: "20px",
        width: "230px",
        height: '100px',
        color: `white`
    }
    
    return(
        <div style={StyleMasterCard}>

        <p>************{number[12]}{number[13]}{number[14]}{number[15]}</p>
        <p>{expirationMonth}/{expirationYear}   {bank}</p>
        <p>{owner}</p>

        </div>
    )
}

export default CreditCard;