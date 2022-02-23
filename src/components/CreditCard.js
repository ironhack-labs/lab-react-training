
export default function CreditCard(props) {
    return (
        <div style={{background: `${props.bgColor}`}}>
        <div style={{color:`${props.color}`}}>
            <p>{props.type}</p>
            <div type="password">
                <p> {props.number}</p>
            </div>

            <p>{props.expirationMonth}</p>
            <p>{props.expirationYear}</p>
            <p>{props.bank}</p>
        </div>
    </div>
    )
}
