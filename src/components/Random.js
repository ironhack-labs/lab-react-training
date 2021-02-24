import React from 'react'

export default function Random(num) {

    const random =()=>{
        return Math.floor(Math.random()*(num.max-num.min)+num.min)
    }
    return (
        <div className="idCards">
            <p>El número random entre {num.min} y el {num.max} es: {random()}</p>   
        </div>
    )
}
