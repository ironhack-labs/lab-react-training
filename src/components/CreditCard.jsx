import React from 'react'
//import visa from '../../public/img/visa.png'

const CreditCard = (props) => {
    const getExpirationDate = ({expirationMonth, expirationYear}) => {
        return `${expirationMonth > 9 ? expirationMonth : '0' + expirationMonth}/${expirationYear.toString().substr(-2)}`
    }
    const getCardType = ({type}) => {
        if (type === "Visa") {
            return 'img/visa.png'
        } else {
            return 'img/master-card.svg'
        }
    }
    return (
        <div className='credit-card' style={{backgroundColor: props.bgColor, color: props.color}}>
            <div className='credit-card-logo'>
                <img src={getCardType(props)} alt="visa logo"/>
            </div>
            <p className='credit-card-number'><span>···· ···· ····  </span>{props.number.substr(-4)}</p>
            <div className='credit-card-data'>
                <p>Expires {getExpirationDate(props)}<span>{props.bank}</span></p>
                <p>{props.owner}</p>
            </div>
        </div>
    )
}

export default CreditCard
