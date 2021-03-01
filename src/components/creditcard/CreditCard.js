
const CreditCard = ({ type, number, expirationDate, bank, owner, picture }) => {
    return (
        <div className="creditCard border rounded">
            <img src={picture} width="45" className="d-inline-block m-1 float-end" />
            <h4 className="card-subtitle mb-2 text-muted">{number}</h4>
            <p className="card-text">Expires {expirationDate}</p>
            <p className="card-text">{bank}</p>
            <p className="card-text">{owner}</p>
            <h className="card-title float-end">{type}</h>
        </div>
    )
}

CreditCard.defaultProps = {
    picture: Image,
    number: '',
    expirationDate: '',
    bank: '',
    owner: '',
    type: '',
}
export default CreditCard; 
