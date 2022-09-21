function CreditCard(props){
    const {type, expirationMonth, expirationYear, bank, owner, bgColor, color} = props

    let numero = props.number

    function mostrarNumero (numero) {
        let digitos = props.number.slice(-4)
        return ( `**** **** **** ${digitos}`)
    }

    return(
        <div className="tarjeta" style={{background: `${bgColor}`, color: `${color}`}}>
            <div class="type">{type}</div>
            <h2>{mostrarNumero()}</h2>
            <div class="info d-flex">
                <p>Expires {expirationMonth} / {expirationYear}   </p>
                <p> {bank}</p>
            </div>
            <h6>{owner}</h6>
        </div>
    )
      
}

export default CreditCard