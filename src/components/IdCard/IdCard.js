import React from 'react'

function IdCard({lastName, firstName, gender, height, birth, picture}){
  return (
    <article className="idCard">
      <div>
        <img src={picture} alt="profile" />
      </div>
      <div>
        <p>
          <span>First Name:</span> {firstName}{' '}
        </p>
        <p>
          <span>Last Name:</span> {lastName}
        </p>
        <p>
          <span>Gender:</span> {gender}
        </p>
        <p>
          <span>Height:</span> {height}
        </p>
        <p>
          <span>Birth:</span> {birth}
        </p>
      </div>
    </article>
  );
}

export default IdCard