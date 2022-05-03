import { useState } from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  const [profilesList, setProfilesList] = useState(profiles);

  return profilesList.map(
    ({ firstName, lastName, country, img, isStudent }) => (
      <div>
        <hr />
        <img src={img} alt={firstName} />
        <section>
          <h5>firstName:{firstName}</h5>
          <h5>lastName:{lastName}</h5>
          <p>country: {country}</p>
          <p>{isStudent ? ' type:student' : 'type:teacher'}</p>
        </section>
      </div>
    )
  );
};

export default FaceBook;
