import React from 'react'
import masterCard from '../assets/images/visa.png'
import visaCard from '../assets/images/visa.png'

function CreditCard(props) {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

    function checkType(type) {
        if (type === 'Visa') {
            return visaCard;
        } else {
            return masterCard;
        }
    }
  
    return (
    <div className='info-card'>
        <div className='card' style={{backgroundColor: `${bgColor}`, color: `${color}`}}>
            <div>
                <img src={checkType(type)} alt='card type'></img>
            </div>
            <div>
                <p>{`⬤⬤⬤⬤ ⬤⬤⬤⬤ ⬤⬤⬤⬤ ${number.substring(number.length - 4)}`}</p>
            </div>
            <div>
                <p>Expires {expirationMonth}/{expirationYear.toString().substring(expirationYear.toString().length - 2)}</p>
            </div>
            <div>
                <p>{bank}</p>
            </div>
            <div>
                <p>{owner}</p>
            </div>
        </div>
    </div>
  )
}

export default CreditCard