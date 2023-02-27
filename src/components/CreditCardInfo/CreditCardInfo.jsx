import "./CreditCardInfo.css"


function CreditCardInfo({ cardInfo }) {
    const {
        expirationMonth,
        expirationYear,
        bank,
        owner,
    } = cardInfo
    const topInfo = `Expires ${expirationMonth}/${expirationYear}     ${bank}`
    return (
        <div className="CreditCardInfoContainer">
            <div className="TopInfo">
                <p>{topInfo}</p>
            </div>
            <div className="BottomInfo">
                <p>{owner}</p>
            </div>
        </div>

    );
}

export default CreditCardInfo;