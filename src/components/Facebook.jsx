import { useState } from 'react';
import profiles from '../data/berlin.json';

function Facebook() {
  const [allProf, setAllProf] = useState(profiles);
  const [pAllProf, setPAllProf] = useState(profiles);

  return pAllProf.map((pAllProf, index) => {
    console.log('------------', pAllProf);
    return (
      <div className="IdCard" key={index}>
        <div className="pic">
          <img src={pAllProf.img} alt="Profile" />
        </div>
        <div className="user">
          <p>
            <b>First name: </b>
            {pAllProf.firstName}
          </p>
          <p>
            <b>Last name: </b>
            {pAllProf.lastName}
          </p>
          <p>
            <b>Gender: </b>
            {pAllProf.country}
          </p>
          <p>
            <b>Type: </b> {pAllProf.isStudent ? 'Student' : 'Teacher'}
          </p>
        </div>
      </div>
    );
  });
}

export default Facebook;
