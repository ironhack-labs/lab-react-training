import './IdCard.css';

const IdCard = (props) => {
  const { picture, firstName, lastName, gender, height, birth } = props;
  const date = birth.toDateString();
  return (
    <div className="IdCard">
      <img alt="pic" className="picture" src={picture} />
      <div className="IdcardInfo">
        <p>
          <b>First name:</b> {firstName}
        </p>
        <p>
          <b>Last name:</b> {lastName}
        </p>
        <p>
          <b>Gender:</b> {gender}
        </p>
        <p>
          <b>Height:</b> {height}
        </p>
        <p>
          <b>Birth:</b> {date}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
