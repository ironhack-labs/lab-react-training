import '../assets/css/CreditCard.css'

const CreditCard = ({ number, expirationMonth, expirationYear, bank, owner, type, bgColor, color }) => {

    const hideNumbers = ( number ) => {
        return '●●●● ●●●● ●●●●' + number.slice(-4)
    }

    const cardLogo = ( type ) => {
       return type === "Master Card" ? "master-card.svg": "visa.png"
    }

    return (
      <div
        className="CreditCard border border-light rounded-3 m-3"
        style={{ height: '190px', 'backgroundColor': bgColor, color: color }}
      >
        <img
          src={'/img/' + `${cardLogo(type)}`}
          height={22}
          alt={`${type} logo`}
        />
        <p id="number">{hideNumbers(number)}</p>
        <p id="date">
          Expires {expirationMonth}/{expirationYear} {bank}{' '}
        </p>
        <p id="owner">{owner}</p>
      </div>
    );

}

export default CreditCard