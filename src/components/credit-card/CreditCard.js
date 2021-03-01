function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    const style = {
        backgroundColor: bgColor, 
        color: color, 
        
            
        
    }  



    return (
        <div className="row ">
        <div className="text-center  p-3 mt-2" style={style} >
            <div className="text-end me-2">{type}</div>
            <div className="card-body">
                <h5 className="card-title text-center mb-3">{number}</h5>
                <p className="card-text text-start mb-0">Expires {expirationMonth}/{expirationYear} {bank}</p>

                <p className="card-text text-start">{owner}</p>
            </div>
        </div>
        </div>

    )

}

export default CreditCard

