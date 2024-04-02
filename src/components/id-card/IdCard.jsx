import React from 'react';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="card mb-3" style={{width:'540px'}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={picture} className="img-fluid rounded-start"/>
            </div>
            <div className="col-md-8">
                <div>
                    <p>Last name: {lastName}</p>
                </div>
                <div>
                    <p>First name: {firstName}</p>
                </div>
                <div>
                    <p>Genre: {gender}</p>
                </div>
                <div>
                    <p>Height: {height}</p>
                </div>
                <div>
                    <p>Birth date: {birth.toDateString()}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default IdCard;
