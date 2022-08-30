import './IdCard.css';
const IdCard = (props) => {
  return (
    <div className="IdCard">
      <img src={props.picture} alt="imageperson" />
      <div>
        <p><b>First name:</b> {props.firstName}</p>
        <p><b>Last name:</b> {props.lastName}</p>
        <p><b>Gender:</b> {props.gender}</p>
        <p><b>Height:</b> {props.height}</p>
        <p><b>Birth:</b> {props.birth}</p>
      </div>
    </div>
  );
};
export default IdCard;
