import './index.css';
import profiles from '../../data/berlin.json';


export const FaceBook = (profile) => {
  return profiles.map((profile) => {
    const type = profile.isStudent ? 'Student' : 'Teacher';
    return (
      <div className="Facebook">
        <img src={profile.img} alt="ProfileImage" />
        <div className="ProfileInformation">
          <p>FirstName: {profile.firstName}</p>
          <p>LastName: {profile.lastName}</p>
          <p>Country: {profile.country}</p>
          <p>Type: {type}</p>
        </div>
      </div>
    );
  });
};
