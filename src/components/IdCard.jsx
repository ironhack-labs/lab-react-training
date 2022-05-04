const IdCard = (props) => {
  return (
    <div>
      <img src={props.picture} alt="" />
      <div>First Name: {props.firstName}</div>

      <div>Last Name: {props.lastName}</div>

      <div>Gender: {props.gender}</div>
      <div>Height: {props.height}</div>
      <div>Birth: {props.birth.toString()}</div>
    </div>
  );
};

export default IdCard;
