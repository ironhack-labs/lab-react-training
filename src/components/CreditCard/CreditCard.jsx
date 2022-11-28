import './CreditCard.css'

const CreditCard = props => {


    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    // let monthString = expirationMonth.toString()
    // let month
    // if (monthString.length < 2) {
    //     return month = '0' + monthString
    // }


    const numberHidden = number.split('').map((elm, i) => {
        if (elm[i] < number.length - 4) {
            return elm = '*'
        }
        return elm
    })

    console.log(numberHidden)

    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }


    return (
        <div className='CreditCard' style={divStyle}>
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

    // **** **** **** { number.slice(12) }