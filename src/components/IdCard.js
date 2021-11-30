const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div>
      <p>{lastName}</p>
      <p>{firstName}</p>
      <p>{gender}</p>
      <p>{height}</p>
      <p>{birth}</p>
      <img src={picture} />
    </div>
  );
};
export default IdCard;
