import './CreditCard.css'
import React from 'react'
import visaImg from './../../assets/images/visa.png'
import MasterCardImg from './../../assets/images/master-card.png'

const CreditCard = ({ cardInfo }) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = cardInfo

    let imgLogo = ''
    type === 'Visa' ? imgLogo = visaImg : imgLogo = MasterCardImg

    return (
        <div className='CreditCard' style={{ backgroundColor: bgColor, color }}>
            <div className='CardType'>
                <img src={imgLogo} alt="{type}" className='imgLogo' />
            </div>
            <div className="CardNum"><p>**** **** **** {number.slice(-4)}</p></div>
            <div className='ExpBankLine'>
                <div className="Expiration">
                    {expirationMonth.toString().slice(-1)}/{expirationYear.toString().slice(-2)}
                </div>
                <div className='bankName'>{bank}</div>
            </div>

            <div className="Owner">{owner}</div>
        </div>
    )
}

export default CreditCard