const CreditCard = (props) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props

    const ccCompany = (type == "Visa"
        ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
        : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png")


    return (
        <div className='container card mb-5' style={{ width: 800, height: 375, backgroundColor: bgColor, color:color, borderRadius:20}}>
            <div className='row'>
                <div className="d-flex flex-column p-4" >

                    <div className="row justify-content-end mb-5">
                        <img style={{ width: 100, height: 40 }} src={ccCompany} />
                    </div>

                    <div className="row justify-content-center card-num mb-4 mt-3">
                        <h1 class='cc-font'>•••• •••• •••• {number.slice(12)}</h1>
                    </div>

                    <div className="row mb-3">
                        <h4 style={{textAlign:"left"}}>Expires {`${expirationMonth}`.padStart(2, '0')}/{`${expirationYear}`.slice(2)} {bank}</h4> <br /> 
                    </div>

                    <div className="row">
                        <h4 style={{textAlign:"left"}}>{owner}</h4>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default CreditCard