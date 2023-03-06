import './index.css';
const parseDate = (date) => {
  return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate()
}

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className="IdCard">
    <img src={picture}></img>
      <ul>
        <li>LastName: {lastName}</li>
        <li>FirstName: {firstName}</li>
        <li>Gender: {gender}</li>
        <li>Height: {height}</li>
        <li>Birth: {parseDate(birth)}</li>
        </ul>
    </div>
  );
};

export default IdCard;