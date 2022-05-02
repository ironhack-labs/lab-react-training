import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {


    let creditNumber = `**** **** **** ${number.slice(-4)}`

    return (
        <div class="creditCard" style={{ backgroundColor: `${bgColor}` }}>
            <div class="text" style={{ color }}>
                <div>{creditNumber}</div>
                <div class="expiration">
                    {expirationMonth},{expirationYear}
                </div>
                <div>
                    {bank}
                </div>
                <div>
                    {owner}
                </div>
            </div>
        </div>
    )
}

export default CreditCard