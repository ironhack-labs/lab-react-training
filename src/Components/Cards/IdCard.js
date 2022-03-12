import './IdCard.css';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
    return (
      <div className="card">
        <div>
          <img src={picture} alt="picture" />
        </div>
        <div className="informations">
          <div className="display-flex">
            <strong>First name:</strong>
            <p>{firstName}</p>
          </div>
          <div className="display-flex">
            <strong>Last name:</strong>
            <p>{lastName}</p>
          </div>
          <div className="display-flex">
            <strong>Gender:</strong>
            <p>{gender}</p>
          </div>
          <div className="display-flex">
            <strong>Height:</strong>
            <p>{height}</p>
          </div>
          <div className="display-flex">
            <strong>Birth:</strong>
            <p>{birth.toDateString()}</p>
          </div>
        </div>
      </div>
    );
}

export default IdCard;