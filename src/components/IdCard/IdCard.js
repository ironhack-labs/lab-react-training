import React from 'react';
import './IdCard.css';

const IdCard = (props) =>{
    return (
        <section>
            <div>
                <img src={props.picture} alt="profile"/>
                <div>
                    <li><b>First name:</b> {props.firstName}</li>
                    <li><b>Last name:</b> {props.lastName}</li>
                    <li><b>Gender:</b> {props.gender}</li>
                    <li><b>Height:</b> {props.height}</li>
                    <li><b>Birth:</b> {props.birth}</li>
                </div>
            </div>
        </section>
    )
}

export default IdCard