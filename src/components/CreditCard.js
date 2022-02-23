
export default function CreditCard(props) {
    const digit = props.number.split('').splice(12,4).join('')
    return (
        <div>
            <div style={{background: `${props.bgColor}`}} className='credit'>
                <div style={{color:`${props.color}`}}>
                <div className='logo'>
                    <p>{props.type}</p>
                </div>
                    <p> &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull; {digit}</p>
                    <p>Expire: {props.expirationMonth} / {props.expirationYear}</p>
                    <p>{props.bank}</p>
                </div>
            </div>
        </div>
    )
}
