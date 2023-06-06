import React from 'react';

function IdCard({idCard}) {
    return (
            
        <div className="Profile" key={idCard.firstName}>
                <img className="ProfileImage" src={idCard.picture} alt="userImage"/>
                
            <div className="ProfileInfo">
                <p><strong>Name: </strong> {idCard.firstName}</p>
                <p><strong>Last name: </strong>{idCard.lastName}</p>
                <p><strong>Gender: </strong> {idCard.gender}</p>
                <p><strong>Height: </strong> {idCard.height}</p>
                <p><strong>Birth: </strong> {idCard.birth}</p>
            </div>   
        </div>
)
}

export default IdCard