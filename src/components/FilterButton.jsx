import React, { useState } from 'react'

export default function FilterButton(props) {

    const [bgColor, setbgColor] = useState('')

    const style = {backgroundColor: bgColor}

    const filter = (fieldValue) => {
        const profiles = document.querySelectorAll(`.${fieldValue}`)

        const newColor = bgColor === 'lightblue' ? '' : 'lightblue'

        setbgColor(newColor)
        profiles.forEach(e => e.style.backgroundColor = newColor)
    }
    return (
        <button 
            onClick={() => filter(props.filterName)} 
            className={`filter-button`}
            style={style}
            >
            {props.filterName}
        </button>
    )
}
