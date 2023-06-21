import { useState } from 'react';
export default function Profile(props) {
  const {
    firstName,
    lastName,
    country,
    picture,
    isStudent,
    backgroundColor = 'white',
  } = props;

  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="card box" style={{ backgroundColor }}>
      <img
        onClick={() => setShowDetail(true)}
        className="card__userImage"
        src={picture}
        alt="profile"
      />
      {showDetail && (
        <div className="card__userInfos">
          <div className="card__userInfo">
            <label htmlFor="firstName">First Name:</label>
            <span>{firstName}</span>
          </div>
          <div className="card__userInfo">
            <label htmlFor="lastName">Last Name:</label>
            <span>{lastName}</span>
          </div>
          <div className="card__userInfo">
            <label htmlFor="gender">Country:</label>
            <span>{country}</span>
          </div>
          <div className="card__userInfo">
            <label htmlFor="height">Type:</label>
            <span>{isStudent ? 'Student' : 'Teacher'}</span>
          </div>
        </div>
      )}
    </div>
  );
}
