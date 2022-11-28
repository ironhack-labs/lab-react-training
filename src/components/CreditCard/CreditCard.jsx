import './CreditCard.css'

const CreditCard = props => {


    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    // let monthString = expirationMonth.toString()
    // let month
    // if (monthString.length < 2) {
    //     return month = '0' + monthString
    // }



    const numberHidden = number.split('').map((elm, i) => {
        if (i < number.length - 4) {
            return elm = '*'
        }
        return elm
    })


    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    let link

    return (
        <div className='CreditCard' style={divStyle}>
            <div>
                <img src={link} alt="" />
            </div>
            <p>{numberHidden}</p>
            <div className='ExpireAndBank'>
                <p>{`Expires ${expirationMonth}/${expirationYear}`}</p>
                <p>{bank}
                </p>
            </div>
            <p>{owner}</p>

        </div>
    )
}

export default CreditCard
