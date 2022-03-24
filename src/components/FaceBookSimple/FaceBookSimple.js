import './FaceBookSimple.scss'
import data from '../../data/berlin.json';

function FaceBookSimple(props) { 
  const profiles = [...data];

  return (

    <div>
      {profiles.map(({ firstName, lastName, country, img, isStudent }, index) => {
        return (
          <div className="profile">
            <div className="profile__img">
              <img className="profile__photo" src={img} />
            </div>

            <div className="profile__info">
              <p><strong>First name:</strong> {firstName}</p>
              <p><strong>Last Name:</strong> {lastName}</p>
              <p><strong>Country:</strong> {country}</p>
              <p><strong>Type:</strong> {isStudent ? 'Student' : 'Teacher'}</p>
            </div> 
          
          </div>
        )
      }
      )}
    </div>
  )
}

export default FaceBookSimple