import React from 'react';

function IdCard(props) {
    return (
        <div className="container p-4 bg-light rounded">        
            <div className="card mb-3" id="id-card">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.picture} className="img-fluid rounded-start" alt="..." id="id-img"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p className="card-text"><b>First name:</b> {props.firstName}</p>
                            <p className="card-text"><b>Last name:</b> {props.lastName}</p>
                            <p className="card-text"><b>Gender:</b> {props.gender}</p>
                            <p className="card-text"><b>Height:</b> {props.height}</p>
                            <p className="card-text"><b>Birth:</b> {props.birth}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IdCard
