import './creditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let colores = {
        backgroundColor: bgColor,
        color
    }

    return (
        <div className="credit-card" >
            <div className='card-elem' style={colores}>
                <div>
                    <p>{type}</p>
                </div>
                <div>
                    <p>{number}</p>
                </div>
                <div>
                    <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
                </div>
                <div>
                    <p>{owner}</p>
                </div>
            </div>


        </div>
    )
}
export default CreditCard