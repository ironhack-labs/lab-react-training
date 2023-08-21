import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let cardtype = ''

    switch (type) {
        case 'Visa':
            cardtype = 'https://inspirecommunitytrust.org/wp-content/uploads/2019/11/visa-5-logo-png-transparent.png'
            break;
        case 'Master Card':
            cardtype = 'https://nudatasecurity.com/wp-content/uploads/2017/03/Mastercard-logo-sq.png'
            break;

    }


    return (<div style={{ backgroundColor: bgColor, color }} className='credit-card'>
        <div>
            <img src={cardtype} alt="" />
            <p>{`**** **** **** ${number.slice(-4)}`}</p>
            <p>{expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>


    </div>)


}

export default CreditCard