import '../styles/CreditCard.css'

function CreditCard(props) {
    if(props.type === 'Visa') {
        return (
            <div className='CreditCard' style={{backgroundColor: props.bgColor, color: 'white'}}>
                <div className='card-image'>
                    <img src="https://cdn.pixabay.com/photo/2021/12/06/13/48/visa-6850402_1280.png" alt='Visa Logo'/>
                </div>
                <h2>&#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; {props.number.slice(12,16).toString()}</h2>
                <div className='card-details'>
                    <p>Expires {props.expirationMonth<10 ? '0' + props.expirationMonth.toString() : props.expirationMonth.toString()}/{props.expirationYear.toString()}</p>
                    <p>{props.bank}</p>
                </div>
                <div className='card-owner'>
                    <p>{props.owner}</p>
                </div>
            </div>
        )
    }
    else if (props.type === 'Master Card') {
        return (
            <div className='CreditCard' style={{backgroundColor: props.bgColor}}>
                <div className='card-image'>
                    <img src="https://seeklogo.com/images/M/Master_Card-logo-027CB51F96-seeklogo.com.png" alt='Master Card Logo'/>
                </div>
                <h2>&#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; &#x2022;&#x2022;&#x2022;&#x2022; {props.number.slice(12,16).toString()}</h2>
                <div className='card-details'>
                    <p>Expires {props.expirationMonth<10 ? '0' + props.expirationMonth.toString() : props.expirationMonth.toString()}/{props.expirationYear.toString()}</p>
                    <p>{props.bank}</p>
                </div>
                <div className='card-owner'>
                    <p>{props.owner}</p>
                </div>
            </div>

        )
    }
}

export default CreditCard