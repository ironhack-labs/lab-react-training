import React from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  console.log(profiles);
  const profilesList = profiles.map((el) => (
    <div className="box">
      <div className="col">
        <img className="profile_picture" src={el.img} alt={el.firstName} />
      </div>
      <div className="col">
        <ul>
          <li>
            <span className="tag">First name:</span> {el.firstName}
          </li>
          <li>
            <span className="tag">Last name:</span> {el.lastName}
          </li>
          <li>
            <span className="tag">Country:</span> {el.country}
          </li>
          <li>
            <span className="tag">Type:</span>
            {el.isStudent ? 'Student' : 'Teacher'}
          </li>
        </ul>
      </div>
    </div>
  ));

  return <div>{profilesList}</div>;
};

export default FaceBook;
