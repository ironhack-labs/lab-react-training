import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const divStyle = {
        color: color,
        backgroundColor: bgColor
    }
    // const hiddenNumber = (str) => {
    //     return str.slice(11, 15)
    // }

    let bankImage
    if (bankImage === 'Visa') {
        bankImage = './../../assets/visa.png'
    }
    if (bankImage === 'Master Card') {
        bankImage = './../../assets/images/master-card.svg'
    }

    return (
        <div className="card" style={divStyle}>
            <img src={bankImage} alt="img"></img>
            <h2>**********{number.slice(11, 15)}</h2>
            <p>Expires: {expirationMonth}/{expirationYear} {bank.toUpperCase()}</p>
            <p>{owner}</p>

        </div>

    )

}

// This iteration is not finished!

export default CreditCard