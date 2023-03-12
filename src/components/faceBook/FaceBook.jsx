import profiles from '../../data/berlin.json';
import './faceBook.css';

const FaceBook = () => {
  return (
    <div className="facebook-container">
      {profiles.map((prof, i) => (
        <div key={i} className="facebook">
          <div className="img">
            <img src={prof.img} alt={prof.firstName} />
          </div>
          <div className="data">
            <p>
              <span>First name: </span>
              {prof.firstName}
            </p>
            <p>
              <span>Last name: </span>
              {prof.lastName}
            </p>
            <p>
              <span>Country: </span>
              {prof.country}
            </p>
            <p>
              <span>Type: </span>
              {prof.isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaceBook;
