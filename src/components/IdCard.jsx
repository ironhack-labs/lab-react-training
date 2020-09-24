import React, {Fragment} from 'react';
import './IdCard.css';

export default function IdCard(props) {
    return (
        <Fragment>
        <div className="id-container">
            <div className="images-container">
                <img className="imagesId" src={props.picture} alt="portrate"/>
            </div>
            <div className="data-container">
                <p>Lastname: {props.lastName}</p>
                <p>Firstname: {props.firstName}</p>
                <p>Gender: {props.gender}</p>
                <p>Height: {props.height}</p>
                <p>Birth: {props.birth.toDateString()}</p>
            </div>
        </div>
        </Fragment>
    )
}