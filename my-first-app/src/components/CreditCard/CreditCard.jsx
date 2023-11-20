const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const renderSwitch = (type) => {
        switch (type) {
            case 'Visa':
                return '/visa.png'
            case 'Master Card':
                return '/mastercardIcon.png'
        }
    }
    const objeto = {
        backgroundColor: bgColor,
        color: color

    }
    return (
        <div className="card" style={objeto} >

            <img src={renderSwitch(type)} alt="" />
            <p>{number}</p>
            <p>Expires {expirationMonth}/{expirationYear}   {bank}</p>
            <p>{owner}</p>
        </div>
    )

}
export default CreditCard