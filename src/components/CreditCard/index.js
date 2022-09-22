import "./style.css"

const CreditCard = (props) => {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}= props;
    const styles = {background: bgColor, color: color}
  return (
    <div className='moneyCard' style={styles}>
        <div className='right'>
            <img width={50} src= {type === "Visa" ? "https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png"
                : "https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo.png"}/>
        </div>
        <div className='numberCard'><strong><p>**** **** **** {number.toString().slice(-4)}</p></strong></div>
        <div>
            <div className=' left infoCard'>
                <p>Expires {expirationMonth}/{expirationYear}</p>
                <p className='bankCard'>{bank}</p>
            </div>
            <p className='left'>{owner}</p>
        </div>
    </div>
  )
}

export default CreditCard