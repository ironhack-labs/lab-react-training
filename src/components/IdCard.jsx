import './IdCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="id-card">
      <img src={picture} alt="" />

      <div>
        <p>
          <span>First name: </span>
          {firstName}
        </p>
        <p>
          <span>Last name: </span>
          {lastName}
        </p>
        <p>
          <span>Gender: </span>
          {gender}
        </p>
        <p>
          <span>Height: </span>
          {height}
        </p>
        <p>
          <span>Birth: </span>
          {birth.toString().slice(0, 15)}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
