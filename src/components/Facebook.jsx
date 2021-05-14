import React from 'react';
import profiles from '../data/berlin.json';

function Facebook() {
  return (
    <div>
      {profiles.map((facebook) => {
        return <FaceBookList {...facebook} />;
      })}
    </div>
  );
}

const FaceBookList = (props) => {
  const { firstName, lastName, country, img, isStudent } = props;
  return (
    <div>
      <img src={img} />,
      <br />
      <p>
        <b>First name</b> {firstName}
      </p>
      ,
      <p>
        <b>Last name</b> {lastName}
      </p>
      ,
      <p>
        <b>Country</b> {country}
      </p>
      ,
      <p>
        <b>Type</b> {isStudent}
      </p>
    </div>
  );
};
export default Facebook;
