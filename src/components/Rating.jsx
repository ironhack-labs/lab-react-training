import React from 'react'

function Rating({children}) {
    const rates = "★".repeat(Math.floor(children)) + "☆".repeat(Math.ceil(5- children));
    return (
        <div>
            <span>{rates}</span>
        </div>
    )
}

export default Rating;