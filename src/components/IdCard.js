import React from 'react';

function IdCard(props){
    let IdCard = (props);
    return(
        <div>
            <div className="image">
                <img src={props.picture} alt="profile image"></img>
            </div>
            <div className="info">
                <p>{`First Name: ${props.firstName}`}</p>
                <p>{`Last Name: ${props.lastName}`}</p>
                <p>{`Gender: ${props.gender}`}</p>
                <p>{`Height: ${props.height}`}</p>
                <p>{`Birth: ${props.birth}`}</p>            
            </div>
        </div>
    )
}

export default IdCard;

// lastName: A string
// firstName: A string
// gender: A string, 'male' or 'female'
// height: A number
// birth: A date
// picture: A string