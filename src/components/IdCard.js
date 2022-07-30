import React from 'react';

const IdCard = (props) => {
    const { firstName, lastName, gender, height, birth, picture } = props;
    return (
      <div className='Card'>
        <div className='IdCardImage'>
          <img src={picture} height={150} alt="picture" />
        </div>

        <div>
          <p>
            <b>First Name:</b> {firstName}
          </p>

          <p>
            <b>Last Name:</b> {lastName}
          </p>

          <p>
            <b>Gender:</b> {gender}
          </p>

          <p>
            <b>Height:</b> {height}
          </p>

          <p>
            <b>Birth:</b> {birth}
          </p>
        </div>
      </div>
    );
}

export default IdCard;