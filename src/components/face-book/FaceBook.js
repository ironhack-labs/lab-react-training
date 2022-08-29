import profiles from '../../data/berlin.json';

import './FaceBook.css';

function FaceBook(){

  const faceBookArray = profiles.map(profile => 
    <div className="d-flex">
      <img src={profile.img} alt={`${profile.firstName} ${profile.lastName}`} />
      <div className="d-flex flex-column face-book__details text-start">
        <span><strong>First name</strong>{profile.firstName}</span>
        <span><strong>Last name</strong>{profile.lastName}</span>
        <span><strong>Country</strong>{profile.country}</span>
        <span><strong>Type</strong>{profile.isStudent ? 'Student' : 'Teacher'}</span>
      </div>
    </div>)
  return (
    <div className="face-book">
      {faceBookArray}
    </div>
  );
}

export default FaceBook;