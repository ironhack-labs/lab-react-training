import React from 'react';

const cardStyle = {
    border: "1px solid black",
    margin: 20,
    display: "flex"
}

const IdCard = props => {
    return (
        <div>
            <div style={cardStyle}>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={props.picture} alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        <p><b>First name:</b> {props.firstName}</p>
                        <p><b>Last name:</b> {props.lastName}</p>
                        <p><b>Gender:</b> {props.gender}</p>
                        <p><b>Height:</b> {props.height}</p>
                        {/* <p><b>Birth:</b> {props.birth}</p> */}
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default IdCard;