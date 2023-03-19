import React from 'react'

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
        return (
          <div>
            <div>
              <img className='card-img' src={picture} alt={firstName} />
            </div>
            <div>
              <div className="text-card">
                <p>
                  <span className='bold-text'>First Name:</span> {firstName}
                </p>
                <p>
                  <span className='bold-text'>Last Name:</span> {lastName}
                </p>
                <p>
                  <span className='bold-text'>Gender:</span> {gender}
                </p>
                <p>
                  <span className='bold-text'>Height:</span> {height}
                </p>
                <p>
                  <span className='bold-text'>Birth:</span> {birth.toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        );
}

export default IdCard