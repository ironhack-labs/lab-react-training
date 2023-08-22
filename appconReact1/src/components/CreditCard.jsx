const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const imageCard = type === 'Visa' ? "/visa.png" : "/mastercardIcon.png"


    return (
        <>
            <img className="creditImg" src={imageCard} alt="" />
            <div>**** **** **** {number.slice(-4)}</div>
            <div>{expirationMonth} / {expirationYear}</div>
            <div>{bank}</div>
            <div>{owner}</div>
            <div>{bgColor}</div>
            <div>{color}</div>
        </>



    )
}

export default CreditCard