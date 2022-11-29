import './CreditCard.css'

const CreditCard = props => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, } = props

    const divStyle = {
        width: 400,
        height: 200,
        background: `${bgColor}`
    }

    return (
        <article className='card'>
            <div style={divStyle}>
                <p>first Name:{type}</p>
                <p>number:**** **** **** {number.slice(12)}</p>
                <p>expiration:{expirationMonth}/{expirationYear}</p>
                <p>birth:{bank}</p>
                <p>owner:{owner}</p>


            </div>
        </article>
    )



}






export default CreditCard