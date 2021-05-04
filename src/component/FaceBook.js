import React from 'react';
import profiles from '../data/berlin.json';

const App = (props) => {
  let list = profiles.map((profile, i) => {
    const classFix = 'IdCard box ';
    const classtext = classFix + (i % 2 ? 'boxblue' : '');

    return (
      <div className={classtext} key={'facebook' + i}>
        <img src={profile.img} alt={profile.lastName} />
        <div className="right">
          <strong>First name</strong>: {profile.firstName} <br />
          <strong>Last name</strong>: {profile.lastName} <br />
          <strong>Country</strong>: {profile.country} <br />
          <strong>Type</strong>: {profile.isStudent ? 'Student' : 'Teacher'}{' '}
          <br />
        </div>
      </div>
    );
  });
  return <div className="faceBook">{list}</div>;
};

export default App;
