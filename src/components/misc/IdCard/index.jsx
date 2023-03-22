import './index.css';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="IdCard">
      <div className="img">
        <img src={picture} />
      </div>
      <div className="textbox">
        <div className="textline">
          <h4>First Name:</h4>
          <h4 className="text-result">{firstName}</h4>
        </div>
        <div className="textline">
          <h4>Last Name:</h4>
          <h4 className="text-result">{lastName}</h4>
        </div>
        <div className="textline">
          <h4>Gender:</h4>
          <h4 className="text-result">{gender}</h4>
        </div>
        <div className="textline">
          <h4>Height:</h4>
          <h4 className="text-result">{height}</h4>
        </div>
        <div className="textline">
          <h4>Birth:</h4>
          <h4 className="text-result">{birth}</h4>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
