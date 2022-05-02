import './CreditCard.css'


const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const divStyle ={backgroundColor: bgColor,
                    color: color}
     
    return (
        <article className='creditCard' style={divStyle}>
            <h3>{type}</h3>
            <h3> **** **** **** {number.substr(number.length - 4)}</h3>
            <p>Expires {expirationMonth}/{expirationYear}     {bank}</p>           
            <p>{owner}</p>
        </article>
    )
}

export default CreditCard




