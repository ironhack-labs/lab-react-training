import mastercard from '../assets/mastercardicon.png'
import visa from '../assets/visa.png'
const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const styles = {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
    },

        sliced = number.slice(-4)


    const newNumber = `**** **** **** ${sliced}`

    let img

    if (type === "Visa") {
        img = visa
    } else if (type === "Mastercard") {
        img = mastercard
    }




    return (
        <article style={styles}>
            <img src={img} style={{ width: '100px' }} />
            <p>{newNumber}</p>

            <p>{expirationMonth < 10 ? expirationMonth = '0' + expirationMonth : expirationMonth}</p>
            <p>{expirationYear.toString().slice(2, 4)}</p>

            <p>{bank}</p>
            <p>{owner}</p>



            <p>{bank}</p>
            <p>{owner}</p>


        </article>
    )


}

export default CreditCard