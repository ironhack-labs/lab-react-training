import React from 'react'

export default function Random(props) {
    return (
        <div>
        <p>Random value between 1 and 6: {Math.floor(Math.random() * 6)}</p>
        <p>Random value between 1 and 100: {Math.floor(Math.random() * 100)}</p>
        </div>
    )
}