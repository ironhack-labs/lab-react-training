import './CreditCard.css'

function CreditCard (props) {

    const {type, number, expirationMonth, expirationYear, bank, owner} = props;

    const cardStyle={
        'backgroundColor': `${props.bgColor}`,
        'color': `${props.color}`
    };

    const cardType = {
        'Visa': 'img/visa.png',
        'Master Card': '/img/master-card.svg'
    }

    return(
        <div className="col-sm-4">
            <div className="card" style={cardStyle} >
                <div className="card-body">
                    <img src={cardType[props.type]} className="cardType" alt="Card type"/>
                    <h5 className="card-title">···· ···· ····{props.number.slice(-4)}</h5>
                    <p className="card-text">Expires {props.expirationMonth}/{props.expirationYear} </p>
                    <p>{props.bank}</p>
                    <p>{props.owner}</p>
                </div>
            </div>
        </div>
    );
}

export default CreditCard;