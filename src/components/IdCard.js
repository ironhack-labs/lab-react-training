import React from "react";

// TODO: to be deleted or replaced
import 'bootstrap/dist/css/bootstrap.css';
// import "./IdCard.css";


function IdCard(props) {

    return (
        <div>
            <div className="row">
                <img src={props.picture} className="img-fluid col-3" alt={props.firstName + " " + props.lastName}/>
                <div className="col-9">
                <p><strong>First Name:</strong> {props.firstName}<br />
                <strong>Last Name:</strong> {props.lastName}<br></br>
                <strong>Gender:</strong> {props.gender}<br></br>
                <strong>Height:</strong> {props.height / 100} m<br></br>
                <strong>Birth:</strong> {String(props.birth).split(' ').splice(1, 3).join(' ')}</p>
                </div>
            </div>
        </div>
    )
}

export default IdCard;