import berlin from '../../data/berlin.json';
import "./Facebook.css"


const FacebookUserBox = (props) => {
  const { firstName, lastName, country, img, isStudent } = props;
  return (
    <div className="FaceBox">
      <img className="imgBox " src={img} alt="face" />
      <ul className="listFace">
        <p className="pCard">First name: {firstName}</p>

        <p className="pCard">Last name: {lastName}</p>

        <p className="pCard">County: {country}</p>

        <p className="pCard">Type: {isStudent ? "Student" : "Teacher"}</p>
      </ul>
    </div>
  );
};

export default FacebookUserBox;
