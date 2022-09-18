import './IdCard.css';

const IdCard = (props) => {


  return (
    <div className="id-card">
      <img src={props.idCardData.picture} alt="ProfilePicture" />
      <div>
        <ul className="card-list">
          <li>
            <strong>First name : </strong>
            {props.idCardData.firstName}
          </li>
          <li>
            <strong>Last name : </strong>
            {props.idCardData.lastName}
          </li>
          <li>
            <strong>Gender : </strong>
            {props.idCardData.gender}
          </li>
          <li>
            <strong>Height : </strong>
            {props.idCardData.height}
          </li>
          <li>
            <strong>Birth : </strong>
            {props.idCardData.birth.toISOString().slice(0, 10)}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IdCard;