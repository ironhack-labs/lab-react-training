import React from 'react'
// import masterCardLogo from '../assets/images/masterCard.svg'
// import visaLogo from '../assets/images/visa.png'

export default function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

  function typeConfig(brand) {
    if (brand === "Visa") {
      return "https://1000marcas.net/wp-content/uploads/2019/12/VISA-Logo.png"
    }
    if (brand === "Master Card") {
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"
    }
    return ""
  }

  function displayDate(month, year) {
    const monthFormat = month.toString().length === 1 ? '0' + month.toString() : month.toString()
    const yearFormat = year.toString().length === 4 ? year.toString().slice(-2) : year.toString()
    return monthFormat + '/' + yearFormat
  }

  return (
    <div className={`text-${color} rounded-lg w-56 h-32 mx-2 border-solid my-2 text-xs text-start p-3`} style={{ backgroundColor: `${bgColor}` }}>
      <div className="flex justify-end mb-2">
        <img className="w-10 " src={typeConfig(type)} alt="Card Logo" />
      </div>
      <div className="text-lg text-center mb-4 flex justify-evenly items-center">
        <span className='w-8 h-auto font-extrabold text-2xl'>····</span>
        <span className='w-8 font-extrabold text-2xl'>····</span>
        <span className='w-8 font-extrabold text-2xl'>····</span>
        <span>{number.slice(-4)}</span>
      </div>
      <div className=''>
        <p>Expires {displayDate(expirationMonth, expirationYear)}<span className="ml-5">{bank}</span></p>
        <p>{owner}</p>
      </div>
    </div>
  )
}
