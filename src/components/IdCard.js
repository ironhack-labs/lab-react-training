import React from 'react'

const IdCard = ({lastName, firstName, gender, height, birth, picture}) => {
    return (
        <div className="IdCard card mb-3">
            <div className="row g-0">
                <div className="col-md-4 text-center mt-auto mb-auto">
                    <img src={picture} alt={firstName}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">First name: <strong>{firstName}</strong></p>
                        <p className="card-text">Last name: <strong>{lastName}</strong></p>
                        <p className="card-text">Gender: <strong>{gender}</strong></p>
                        <p className="card-text">Height: <strong>{height}</strong></p>
                        <p className="card-text">Birth: <strong>{birth}</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IdCard