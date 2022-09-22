import './IdCard.css';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="Card-container">
      <img src={picture} alt="IdCard"></img>
      <ul>
        <li>First name: {firstName}</li>
        <li>Last name: {lastName}</li>
        <li>Gender: {gender}</li>
        <li>Height: {height}</li>
        <li>Birth: {birth}</li>
      </ul>
    </div>
  );
};

export default IdCard;
