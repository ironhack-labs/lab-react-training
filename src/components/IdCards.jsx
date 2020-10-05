import React from 'react';

const IdCards = (props) => {
    
    const formatHeight = (height) => {
        return `${height/100}`;
    };

    return (
        <div className="id-card">
            <img alt="myPicture" src={props.picture} />
            <ul>
                <li><strong>First Name: </strong>{props.firstName}</li>
                <li><strong>Last Name: </strong>{props.lastName}</li>
                <li><strong>Gender: </strong>{props.gender}</li>
                <li><strong>Height: </strong>{formatHeight(props.height)}m</li>
                <li><strong>Birth: </strong>{new Date(props.birth).toLocaleDateString()}</li>
                {/* Todo find the right date format */}
            </ul>
        </div>
    )
}

export default IdCards;

