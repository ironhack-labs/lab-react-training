import React, { useState } from 'react'

export default function FilterButton({filterName, bgColor, filter}) {
    return (
        <button 
            style={{backgroundColor: bgColor}}
            onClick={() => filter(filterName)}>
            {filterName}
        </button>
    )
}
