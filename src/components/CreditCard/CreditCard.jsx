const CreditCard = props => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    
    const divStyle = {
        display: 'flex',
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        padding: '50px',
        width: '250px',
        borderRadius: '10px'
    
    }

    return (
        <div className="row">
            <div className="col">
                <div className="CreditCard" style={divStyle}>
                        <p>{type}</p>
                     <div className="col">
                        <div className="row">
                            <p> •••• •••• •••• •••• { number.slice(12) }</p>
                        </div>
                        <div className="row">
                            <span>Expires: {expirationMonth}/{expirationYear}      {bank}</span>
                            <p>{ owner }</p>
                        </div>
                     </div>
           
                 </div>
            </div>
         </div>
)


}

export default CreditCard