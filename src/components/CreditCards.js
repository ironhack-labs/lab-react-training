function CreditCard(props) {

    const Style = {
        color: props.color,
        backgroundColor: props.bgColor // attention a éviter d'écire background-color
    };

    /*const year = props.expirationYear.split('')
    const yearNum = (props.expirationYear.length - 4)

    function splittedNum (num, limit) {
      num = year
      limit = yearNum
      return num.split('', limit)
    }*/


    return (
        <div id="card" style={Style} >
            <p className="type">{props.type}</p>
            <p className="number">{props.number}</p>
            <p className="expiration">Expires: {props.expirationMonth}/{ props.expirationYear/*splittedNum()*/}</p>
            <p className="bank">{props.bank}</p>
            <p className="owner">{props.owner}</p>
        </div>
    )
}

export default CreditCard

