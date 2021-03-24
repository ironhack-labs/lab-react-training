import React from 'react'
import BoxColor from './BoxColor'

const Boxes = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                marginBottom: 100
            }}
        >
        <BoxColor r={54} g={12} b={198} />
        <BoxColor r={235} g={52} b={107} />
        <BoxColor r={56} g={172} b={98} />
        <BoxColor r={56} g={172} b={198} />
        </div>
    )
}

export default Boxes
