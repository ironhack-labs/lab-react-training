import master from '../assets/images/master-card.svg';
import visa from '../assets/images/visa.png';

function CreditCard(props) {
    const numArr = props.number.split('')
    const hiddenNum = numArr.map(num => {
        return '•'
    }).join('').slice(0, -4)
    return (
        <div className="cardsContainer">
            <div style={{ backgroundColor: props.bgColor, color: props.color }} className="cardInfoContainer  colContainer">
                <span className="cardType">
                    {props.type === 'Master Card'
                        ? <img src={master} alt="master logo" className='logo' />
                        : <img src={visa} alt="visa logo" className='logo' />
                    }
                </span>
                <span className="cardNum">{(hiddenNum + props.number.slice(-4))}</span>
                <span className="expiration">
                    Expires:
                    <span> {props.expirationMonth}</span>/
                    <span>{props.expirationYear} </span>
                    <span>{props.bank}</span>
                </span>

                <span className="ownerName">{props.owner}</span>
            </div>
        </div >

    )
}

export default CreditCard;