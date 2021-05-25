import React from 'react'

export default function IdCard(props) {
    return (
        <div className="card mb-3 container mt-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.picture} alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">First Name: {props.firstName}</p>
                        <p className="card-text">Last Name: {props.lastName}</p>
                        <p className="card-text">Gender: {props.gender}</p>
                        <p className="card-text">Height: {props.height}</p>
                        <p className="card-text">Birth: {props.birth.toUTCString()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
