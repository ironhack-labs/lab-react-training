import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const divStyle = {
        backgroundColor: bgColor,
        color: color
    }


    if (type === 'Visa') {
        return (
            <div className="cardStyle" style={divStyle}>
                <img src="src/assets/visa.png" alt="Visa logo" />
                <h3>**** **** **** {number.toString().slice(12, 16)}</h3>
                <p>Expires {expirationMonth < 10 ? expirationMonth = '0' + expirationMonth : expirationMonth}/{expirationYear.toString().slice(2, 4)}</p>
                <p>{bank}</p>
                <p>{owner}</p>
            </div>
        )
    }

    if (type === 'Master Card') {
        return (
            <div className="cardStyle" style={divStyle}>
                <img src="src/assets/mastercardIcon.png" alt="Master Card logo" />
                <h3>**** **** **** {number.toString().slice(12, 16)}</h3>
                <p>Expires {expirationMonth < 10 ? expirationMonth = '0' + expirationMonth : expirationMonth}/{expirationYear.toString().slice(2, 4)}</p>
                <p>{bank}</p>
                <p>{owner}</p>
            </div>
        )


    }

}

export default CreditCard