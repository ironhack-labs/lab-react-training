import React from 'react';

function CreditCard (props) {

    return (
        <div className="container px-3">
            <div className="row gx-3 d-flex">
                <div className="col">
                    <div className="p-3 border">
                        <img src={props.type} className="img-fluid rounded-start pics logos" 
                        alt="Logo"/>
                        <p className="card-text">**** **** **** {props.number.substr(props.number.length - 4)}</p>
                        <p className="card-text">{props.expirationMonth}/{props.expirationYear}</p>
                        <p className="card-text">{props.bank}</p>
                        <p className="card-text">{props.owner}</p>
                        <div style={{backgroundColor: props.bgColor}}></div>
                        <div style={{color: props.color}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreditCard