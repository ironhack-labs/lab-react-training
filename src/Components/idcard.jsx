function IdCard(props) {
  return (
    <div className="Id">
      <div className="picture">
        <img src={props.idCard.picture} alt="picture" />
      </div>
      <div className="person-info">
        <h3>
          First Name:
          {props.idCard.firstName}
        </h3>
        <h3>
          Last Name:
          {props.idCard.lastName}
        </h3>
        <h3>
          Gender: {props.idCard.gender}
        </h3>
        <h3>
          Height(cm):
          {props.idCard.height}
        </h3>
        <h3>
          Birth: {props.idCard.birth}
        </h3>
      </div>
    </div>
  );
}

export default IdCard;
