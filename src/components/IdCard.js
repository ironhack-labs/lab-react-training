import React from 'react';

function IdCard(props) {

    const { lastName, firstName, gender, height, birth, picture } = props;

    return(
        <div className="IdCard">
            <img src={ picture } alt={ firstName } />
            <ul>
                <li> <span>Last name: </span> { lastName } </li>
                <li> <span>First name: </span> { firstName } </li>
                <li> <span>Gender: </span> { gender } </li>
                <li> <span>Height: </span> { height } </li>
                <li> <span>Birth: </span> { birth } </li>
            </ul>
        </div>
    );
}

export default IdCard;