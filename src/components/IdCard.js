import React, {Fragment} from 'react';
import './IdCard.css';

function IdCard(props){

    return (
        <Fragment>
        <div className="id-card">
         <img src={props.picture} alt={`profile picutre of ${props.firstName} ${props.lastName}`}/>
         

            <div className="content-card">
            <p>
            <span>Last name:</span>{props.lastName}
            </p>
            <p>
            <span>First name:</span>{props.firstName}
            </p>
            <p>
            <span>Gender:</span>{props.gender}
            </p>
            <p>
            <span>Height:</span>{props.height}
            </p>
            <p>
            <span>Birthday:</span> {props.birth.toDateString()}
            </p>
            <p>
            <span>Birth:</span> {props.picture}
            </p>
            </div>

            </div>

        </Fragment>
    );
}

export default IdCard;
