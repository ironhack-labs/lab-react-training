import mastercard from '../assets/mastercard.png'

import visa from '../assets/visa.png'



const Creditcard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const styles = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    number = number.slice(-4)
    const newNumber = `**** **** **** ${number}`

    let img

    if (type === 'Visa') {
        img = visa
    }
    else if (type === 'Master Card') {
        img = mastercard


    }



    return (
        <article style={styles}>
            <img src={img} style={{ width: '100px' }} />
            <p>{newNumber}</p>
            <p>{expirationMonth}</p>
            <p>{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>


        </article>


    )

}


export default Creditcard



