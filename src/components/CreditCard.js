import './CreditCard.css'


function CreditCard(props) {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    return (
        <div className="CreditCard">
            <div>
                <div className="card">
                    <div className="type">{type}</div>
                    <div className=''>{number}</div>
                    <div className=''>{expirationMonth} {'/'} {expirationYear}</div>
                    <div className=''>{bank}</div>
                    <div className=''>{owner}</div>
                    <div className=''>{bgColor}</div>
                    <div className=''>{color}</div>
                </div>
            </div>
        </div>
    )
}


export default CreditCard