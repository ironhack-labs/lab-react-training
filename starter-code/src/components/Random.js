import React from 'react'

function Random({min, max}) {
    const random = Math.floor( Math.random() * (max-min)) + min
    return (
        <div className="random">
            Random value between {min} - {max} => {random}
        </div>
    )
}

export default Random
