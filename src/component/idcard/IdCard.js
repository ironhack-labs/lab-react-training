import React from 'react';
import 'bulma/css/bulma.css';
import './IdCard.css'

const IdCard = props =>{
    const birthday = ('0' + props.birth.getDate()).slice(-2) + '/'
             + ('0' + (props.birth.getMonth()+1)).slice(-2) + '/'
             + props.birth.getFullYear();
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={props.picture} alt="avatar" />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p><strong>First Name: {props.firstName}</strong></p>
                        <p><strong>Last Name: {props.lastName}</strong></p>
                        <p><strong>Gender: {props.gender}</strong></p>
                        <p><strong>Height: {props.height / 100}m</strong></p>
                        <p><strong>Birth: {birthday}</strong></p>
                    </div>
                </div>
            </article>
        </div>
    );
}


export {IdCard}