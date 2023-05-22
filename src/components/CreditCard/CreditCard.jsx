import './CreditCard.css'
import logoVisa from '../../assets/images/visa.png'
import logoMaster from '../../assets/images/mastercard.png'



const CreditCard = ({ card }) => {
    let { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = card

    let logo
    if (type === 'Visa') {
        logo = logoVisa
    }
    if (type === 'Master card') {
        logo = logoMaster
    }

    let cadenaNumero = number.toString();
    let longitud = cadenaNumero.length;
    if (longitud >= 4) {
        let ultimosCuatroDigitos = cadenaNumero.slice(-4);
        let asteriscos = '*'.repeat(longitud - 4);
        let numeroOculto = asteriscos + ultimosCuatroDigitos;
        number = numeroOculto
    }

    return (
        <div className='card' style={{ backgroundColor: bgColor, color: color }}>
            <img className='logo' src={logo} alt="card" />
            <p>{number}</p>
            <p>expires {expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )

}


export default CreditCard