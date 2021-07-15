import React from 'react'

function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture } = props;

    return (
        <div>
            <div className="id-card-container"> 
                <img src={picture} alt={lastName}></img>
                <div>
                    <p><b>First name: </b>{firstName}</p>
                    <p><b>Last name: </b>{lastName}</p>
                    <p><b>Gender: </b>{gender}</p>
                    <p><b>Height: </b>{height}</p>
                    <p><b>Birth: </b>{birth.toString()}</p>
                </div>
            </div>
        </div>
    )
}

export default IdCard;
