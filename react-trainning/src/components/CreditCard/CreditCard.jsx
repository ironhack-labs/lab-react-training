const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const cardStyle = {
        backgroundColor: bgColor,
        color: color,
    }

    let cardLogo = null

    if (type === 'Visa') {
        cardLogo = <img src="./img/visaLogo.png" alt="Visa Logo" style={{ width: '10%', height: '10%' }} />
    } else if (type === 'Master Card') {
        cardLogo = <img src="./img/masterLogo.png" alt="MasterCard Logo" style={{ width: '5%', height: '5%' }} />
    }

    return (
        <>
            <div style={cardStyle} >

                {cardLogo}

                <p> {number} </p>

                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <p> Expires {expirationMonth}/{expirationYear}</p>

                    <p> {bank} </p>

                </div>

                <p> {owner} </p>

            </div>
        </>

    )
}

export default CreditCard 