const CreditCard = ({ type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color }) => {

    let color1 = {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        padding: "20px"

    }


    let numero = number.substr(12, 16)


    return (
        <div style={color1}>
            <p> tipo {type}</p>
            <p>numero **** **** **** {numero} </p>
            <p>banco {bank}</p>
            <p>owner {owner}</p>
            <p>{expirationMonth}/{expirationYear} </p>
            <p>mes {owner}</p>
            <p>año {owner}</p>


            <p></p>


        </div>
    )
}

export default CreditCard