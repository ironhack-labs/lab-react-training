import './CreditCard.css'


function CreditCard(props) {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    return (
        <div className="CreditCard">
            <div>
                <div className="card">
                    <div className="type">{type}</div>
                    <div>{number}</div>
                    <div>{expirationMonth} {'/'} {expirationYear}</div>
                    <div>{bank}</div>
                    <div>{owner}</div>
                    <div>{bgColor}</div>
                    <div>{color}</div>
                </div>
            </div>
        </div>
    )
}


export default CreditCard