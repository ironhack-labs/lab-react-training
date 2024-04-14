import React from 'react';

function IdCard({lastName, firstName, gender, height, birth, picture}) {
    return( 
        <div className="card">
            <div className="d-flex flex-row">
                <div className="picture">
                    <img src={picture} alt="" className="img-fluid" /> 
                </div>
                <div className="text">
                    <ul>
                        <li><strong>LastName:</strong> {lastName}</li>
                        <li><strong>FirstName:</strong> {firstName}</li>
                        <li><strong>Gender:</strong> {gender}</li>
                        <li><strong>Height:</strong> {height}</li>
                        <li><strong>Birth:</strong> {birth.toDateString()}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default IdCard;

