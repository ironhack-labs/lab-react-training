import React from 'react'
import "../styles/CreditCard.css"

const CreditCard = (props) => {

    function expDate(m, y) {
        let month = m >=10 ? String(m) : "0" + m;
        let year = String(y).slice(-2)
        return `${month}/${year}`
    }

    function hideNumber(number) {
        return String(number).slice(-4)
    }

    return (
        <div className="card"
            style={{
            backgroundColor: props.bgColor,
            color: props.color
        
        }} 
        >
            <div className="type">{props.type}</div>
            <div className="number" >
                <div className="dots"><div className="dot" style={{ background: props.color}}></div><div className="dot" style={{ background: props.color}}></div><div className="dot" style={{ background: props.color}}></div><div className="dot" style={{ background: props.color}}></div></div>
                <div className="dots"><div className="dot" style={{ background: props.color}}></div><div className="dot" style={{ background: props.color}}></div><div className="dot" style={{ background: props.color}}></div><div className="dot" style={{ background: props.color}}></div></div>
                <div className="dots"><div className="dot" style={{ background: props.color}}></div><div className="dot" style={{ background: props.color}}></div><div className="dot" style={{ background: props.color}}></div><div className="dot" style={{ background: props.color}}></div></div>                
                <div className="numEnd">{hideNumber(props.number)}</div>    
            </div>
            <div className="exp"><p className="expDate">Expires {expDate(props.expirationMonth, props.expirationYear)}</p><p>{props.bank}</p></div>
            <p className="owner">{props.owner}</p>
        </div>
    )
}

export default CreditCard
