import './CreditCard.css'

const CreditCard=(props) =>{

    return (
        <>
            <article>
                <p>{props.type}</p>
                <p>*********{props.number.slice(-4)}</p>
                <p>{props.expirationMonth}</p>
                <p>{props.expirationYear}</p>
                <p>{props.bank}</p>
                <p>{props.owner}</p>
            </article>
        </>
    );
}

export default CreditCard;