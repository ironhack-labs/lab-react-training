import './IdCard.css';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <article className="idCard">
      <img src={picture} />
      <div className="idInfo">
        <p>
          <strong>First name: </strong>
          {firstName}
        </p>
        <p>
          <strong>Last name: </strong>
          {lastName}
        </p>
        <p>
          <strong>Gender: </strong> {gender}
        </p>
        <p>
          <strong>Height: </strong> {height}
        </p>
        <p>
          <strong>Birth: </strong>
          {birth.toLocaleString()}
        </p>
      </div>
    </article>
  );
}

export default IdCard;
