import './index.css';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="IdCard">
      <img src={picture} alt="imagen"></img>
      <ul>
        <li>
          <strong>FirstName:</strong> {firstName}
        </li>
        <li>
          <strong>LastName: </strong>
          {lastName}
        </li>
        <li>
          {' '}
          <strong>Gender:</strong> {gender}
        </li>
        <li>
          <strong>Height:</strong> {height}
        </li>
        <li>
          {' '}
          <strong>Birth:</strong> {birth}
        </li>
      </ul>
    </div>
  );
}

export default IdCard;
