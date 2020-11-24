import React from 'react'

const CreditCard = (props) => {
    const cardStyle = {
        margin: '10px',
        padding: '20px',
        width: '300px',
        height: '187px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`,
        lineHeight: '3px',
    }   

    let img
    let month = props.expirationMonth
    let year = props.expirationYear
    let number = (props.number).toString().slice(-4)

    if (props.type === "Visa") {
        img = './img/visa.png'
    } else if (props.type === "Master Card") {
        img = './img/master-card.svg'
    }

    if (month.toString().length > 2) {
        return <p>Invalid input</p>
    } else if (month.toString().length < 2 ) {
        month = "0" + month.toString()
    }

    if (year.toString().length > 4) {
        return <p>Invalid input</p>
    } else if (year.toString().length === 4) {
        year = year.toString().slice(-2)
    }

    

    return (
        <div style={cardStyle}>
            <div style={{textAlign: 'right'}}>
                <img style={{height:'20px'}} src={img} alt='Credit card logo'/>
            </div>
            
            <div style= {{marginTop: '30px', textAlign: 'center'}}>
                <p style={{fontSize:'1.9em'}}>•••• •••• •••• {number}</p>
            </div>
            <div style = {{textAlign: 'left'}}>
                <p>Expires {month}/{year}<span style={{marginLeft:'20px'}}>{props.bank}</span></p>
                <p>{props.owner}</p>
            </div>
            
        </div>
    )
}

export default CreditCard
