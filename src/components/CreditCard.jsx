import React from 'react'

export default function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

  function typeConfig(brand) {
    if (brand === "Visa") {
      return "https://1000marcas.net/wp-content/uploads/2019/12/VISA-Logo.png"
    }
    if (brand === "Master Card") {
      return "https://thumbs.dreamstime.com/b/mastercard-logo-vector-illustration-en-el-fondo-blanco-ejemplo-editorial-del-141701054.jpg"
    }
    return ""
  }

  return (
    <div className={`text-${color} rounded-lg w-56 h-32 mx-2 border-solid my-2 text-xs text-start p-3`} style={{ backgroundColor: `${bgColor}` }}>
      <div className="flex justify-end mb-2">
        <img className="w-10 " src={typeConfig(type)} alt="Card Logo" />
      </div>
      <div className="text-lg text-center mb-4 flex justify-evenly items-center">
        <span>···· ···· ···· </span>
        <span>{number.slice(-4)}</span>
      </div>
      <div className=''>
        <p>Expires {expirationMonth}/{expirationYear}<span className="ml-5">{bank}</span></p>
        <p>{owner}</p>
      </div>
    </div>
  )
}
