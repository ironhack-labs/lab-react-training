import profiles from '../data/berlin.json';
import '../Styles/FaceBook.css';

function FaceBook(props) {
  return (
    <div>
      {profiles.map((profile, index) => (
        <div className="profile" key={index}>
          <img src={profile.img} alt="" />
          <div className="profile-info-wrapper">
            <p>
              <b>First name: </b>
              {profile.firstName}
            </p>
            <p>
              <b>Last name: </b>
              {profile.lastName}
            </p>
            <p>
              <b>Country: </b>
              {profile.country}
            </p>
            <p>
              <b>Type: </b>
              {profile.isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaceBook;
