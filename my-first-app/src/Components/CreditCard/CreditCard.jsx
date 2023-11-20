import mastercard from '../../assets/mastercardIcon.png'
import visa from '../../assets/visa.png'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

    number = number.slice(-4)
    const newNumber = `**** **** **** ${number}`


    const styles = {
        backgroundColor: `${bgColor}`,
        color: `${color}`,

    }
    let img
    if (type === 'Visa') {
        img = visa
    }
    else {
        img = mastercard
    }



    return (
        <div style={styles}>
            <img src={img} alt="" />
            <p>{newNumber}</p>
            <p>{expirationMonth}</p>
            <p>{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
            {/* <p>{bgColor}</p>
            <p>{color}</p> */}


        </div>
    )
}

export default CreditCard