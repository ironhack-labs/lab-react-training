import profiles from '../../data/berlin.json';
import './FaceBook.css';

function FaceBook(props) {
  const { firstName, lastName, country, img, isStudent } = props;

  return (
    <>
      {profiles.map((profile) => (
        <div className="facebook">
          <img src={profile.img} alt="profile pic" />

          <div className="facebook-info">
            <p>
              <b>First name:</b> {profile.firstName}
            </p>
            <p>
              <b>Last name:</b> {profile.lastName}
            </p>
            <p>
              <b>Country:</b> {profile.country}
            </p>
            <p>
              <b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default FaceBook;
