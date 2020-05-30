import React from 'react';

function IdCard(props) {
    return(
        <div className="user-info">
            <img src={props.image}/>
            <section>
                <p><span>First name:</span> {props.firstName}</p>
                <p><span>Last name:</span> {props.lastName}</p>
                <p><span>Gender:</span> {props.gender}</p>
                <p><span>Height:</span> {props.height}</p>
                <p><span>Birth:</span> {props.birth}</p>
            </section>
        </div>
    )
};

export default IdCard;