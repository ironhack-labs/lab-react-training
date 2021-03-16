import React from 'react'

const Random = ({min, max}) => {
    let result = Math.floor(Math.random() * max) + min
    return (
        <div className="Greetings card mb-3">
            <div className="row g-0">
                <div className="card-body">
                    <p className="card-text">Random value between <strong>{min}</strong> and <strong>{max}</strong> => <strong>{result}</strong></p>
                </div>
            </div>
        </div>
    )   
}

export default Random