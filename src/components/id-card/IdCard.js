
function IdCard({ lastName, firstName, gender, height, birth, picture, className }) {
  return (

    <div className={'card" style="width: 18rem;'}>
      <img src={picture} alt={firstName} />

      <div className={'card-body'}>
        <h5 className="card-title">{firstName} {lastName}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Gender: {gender}</li>
        <li className="list-group-item">Height: {height}cm</li>
        <li className="list-group-item">Birth: {birth.toDateString()}</li>
      </ul>
    </div>
  );
}

export default IdCard;

