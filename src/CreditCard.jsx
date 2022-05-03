// import
const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {


    const divStyle = {
        backgroundColor: `${bgColor}`,
        width: '300px',
        borderRadius: '10px',
        height: '200px',
        color: `${color}`,
        textAlign: 'center'
    }

    let finalPas = number.substr(number.length - 4)
    let year = expirationYear.toString().substr(- 2)

    const icon = (type) => {
        if (type === 'Visa') {
            return "fa fa-cc-visa"
        } else if (type === 'Master Card') {
            return "fa fa-cc-mastercard"
        }
    }

    const finalIcon = icon(type)

    return (
        <div style={divStyle}>
            <i className={finalIcon}></i>
            <p> **** **** **** {finalPas} </p>
            <p> Expires: {year}/{expirationMonth}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div >
    )
}

export default CreditCard