import React from 'react'

const Button = ({country, findCountry, classes}) => {
   
    return (
        <div>
                 <button onClick={findCountry} className={`btn  btn-primary ${classes}`}>{country}</button>
        </div>
    )
}

export default Button
